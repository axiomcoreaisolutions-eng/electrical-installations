/**
 * Content layer: fetches from Sanity at build time and falls back to the
 * seeded defaults in src/content/defaults.ts whenever a document is
 * missing or Sanity is unreachable. The site therefore always builds —
 * with or without CMS content — and every Sanity field, once populated,
 * overrides its default counterpart.
 */
import { createClient } from '@sanity/client';
import groq from 'groq';
import * as defaults from '../content/defaults';
import type { ServiceCategory } from '../content/defaults';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? '4sqfr6zk';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';
const token = import.meta.env.SANITY_API_READ_TOKEN || undefined;

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-07-01',
  useCdn: !token,
  token,
});

async function fetchOrNull<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  try {
    const result = await client.fetch<T>(query, params);
    return result ?? null;
  } catch {
    // Sanity unreachable or dataset empty/private — build proceeds on defaults.
    return null;
  }
}

/** Deep-merge a (partial) Sanity document over its default: only fields the
 *  editor actually filled in override the seeded content. */
function merge<T>(base: T, override: Partial<T> | null): T {
  if (!override) return base;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(override)) {
    if (value === null || value === undefined || value === '') continue;
    const baseValue = out[key];
    if (
      typeof value === 'object' &&
      !Array.isArray(value) &&
      baseValue &&
      typeof baseValue === 'object' &&
      !Array.isArray(baseValue)
    ) {
      out[key] = merge(baseValue, value as Record<string, unknown>);
    } else {
      out[key] = value;
    }
  }
  return out as T;
}

export async function getSiteSettings() {
  const doc = await fetchOrNull<Partial<typeof defaults.siteSettings>>(
    groq`*[_type == "siteSettings"][0]{companyName, positioningLine, phone, phoneHref, email, address, foundedYear}`
  );
  return merge(defaults.siteSettings, doc);
}

export async function getHomepage() {
  const doc = await fetchOrNull<Record<string, unknown>>(
    groq`*[_type == "homepage"][0]`
  );
  // Process steps and trust cards are standalone, ordered documents so they
  // can be reused beyond the homepage (e.g. on /o-nama).
  const steps = await fetchOrNull<Array<{ title: string; text: string }>>(
    groq`*[_type == "processStep"] | order(order asc){title, text}`
  );
  const trustCards = await fetchOrNull<Array<{ title: string; text: string }>>(
    groq`*[_type == "trustCard"] | order(order asc){title, text}`
  );
  return {
    hero: merge(defaults.heroContent, (doc?.hero as Partial<typeof defaults.heroContent>) ?? null),
    categoriesSection: merge(
      defaults.categoriesSection,
      (doc?.categoriesSection as Partial<typeof defaults.categoriesSection>) ?? null
    ),
    whySection: merge(defaults.whySection, (doc?.whySection as Partial<typeof defaults.whySection>) ?? null),
    processSection: {
      ...merge(defaults.processSection, (doc?.processSection as Partial<typeof defaults.processSection>) ?? null),
      steps: steps && steps.length > 0 ? steps : defaults.processSection.steps,
    },
    deepDiveSection: merge(
      defaults.deepDiveSection,
      (doc?.deepDiveSection as Partial<typeof defaults.deepDiveSection>) ?? null
    ),
    trustSection: {
      ...merge(defaults.trustSection, (doc?.trustSection as Partial<typeof defaults.trustSection>) ?? null),
      cards: trustCards && trustCards.length > 0 ? trustCards : defaults.trustSection.cards,
    },
    aboutSection: merge(defaults.aboutSection, (doc?.aboutSection as Partial<typeof defaults.aboutSection>) ?? null),
    contactCta: merge(defaults.contactCta, (doc?.contactCta as Partial<typeof defaults.contactCta>) ?? null),
  };
}

export async function getCategories(): Promise<ServiceCategory[]> {
  const docs = await fetchOrNull<Array<Partial<ServiceCategory> & { slug?: { current?: string } | string }>>(
    groq`*[_type == "serviceCategory"] | order(priority asc){
      title, "slug": slug.current, index, shortDescription, hint, featured,
      "image": image.asset->url, ctaLabel, seoTitle, seoDescription, intro, bullets,
      "subservices": *[_type == "subservice" && references(^._id)] | order(title asc){
        title, "slug": slug.current, shortDescription, longDescription, seoTitle, seoDescription
      }
    }`
  );
  if (!docs || docs.length === 0) return defaults.categories;
  // Merge each Sanity category over its default (matched by slug); keep the
  // default set as the base so a half-populated CMS never loses categories.
  return defaults.categories.map((base) => {
    const override = docs.find((d) => d.slug === base.slug);
    return merge(base, (override as Partial<ServiceCategory>) ?? null);
  });
}

export async function getContactPage() {
  const doc = await fetchOrNull<Partial<typeof defaults.contactPage>>(
    groq`*[_type == "contactPage"][0]{headline, supporting, formTitle, privacyNote, serviceOptions}`
  );
  return merge(defaults.contactPage, doc);
}

export const seo = defaults.seoDefaults;
