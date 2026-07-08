import { defineType, defineField, defineArrayMember } from 'sanity';

/** Reusable link/CTA pair */
const cta = defineType({
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Tekst gumba', type: 'string' }),
    defineField({ name: 'href', title: 'Poveznica', type: 'string' }),
  ],
});

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Postavke stranice',
  type: 'document',
  fields: [
    defineField({ name: 'companyName', title: 'Naziv tvrtke', type: 'string' }),
    defineField({ name: 'positioningLine', title: 'Pozicijska rečenica', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({
      name: 'phone',
      title: 'Telefon (prikaz)',
      type: 'string',
      description: 'Kako se broj prikazuje, npr. "01 209 0733".',
    }),
    defineField({
      name: 'phoneHref',
      title: 'Telefon (za poziv)',
      type: 'string',
      description: 'Međunarodni format bez razmaka, npr. "+38512090733".',
    }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Adresa', type: 'string' }),
    defineField({ name: 'foundedYear', title: 'Godina osnutka', type: 'number' }),
    defineField({
      name: 'socialLinks',
      title: 'Društvene mreže',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Naziv', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'legalLinks',
      title: 'Pravne poveznice',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Naziv', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'string' }),
          ],
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Postavke stranice' }) },
});

const homepage = defineType({
  name: 'homepage',
  title: 'Naslovnica',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge (traka iznad naslova)', type: 'text', rows: 2 }),
        defineField({ name: 'headline', title: 'Naslov (H1)', type: 'string' }),
        defineField({ name: 'subheadline', title: 'Podnaslov', type: 'text', rows: 3 }),
        defineField({ name: 'primaryCta', title: 'Primarni CTA', type: 'cta' }),
        defineField({ name: 'secondaryCta', title: 'Sekundarni CTA', type: 'cta' }),
        defineField({
          name: 'cardLeft',
          title: 'Kartica dolje lijevo',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Naslov', type: 'string' }),
            defineField({ name: 'text', title: 'Tekst', type: 'string' }),
            defineField({ name: 'hint', title: 'Sitni opis', type: 'string' }),
            defineField({ name: 'href', title: 'Poveznica', type: 'string' }),
          ],
        }),
        defineField({
          name: 'cardRight',
          title: 'Kartica dolje desno',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Naslov', type: 'string' }),
            defineField({ name: 'ctaLabel', title: 'Tekst gumba', type: 'string' }),
            defineField({ name: 'href', title: 'Poveznica', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'categoriesSection',
      title: 'Sekcija: kategorije usluga',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Naslov', type: 'string' }),
        defineField({ name: 'supporting', title: 'Prateći tekst', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'whySection',
      title: 'Sekcija: zašto je važno',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Naslov', type: 'string' }),
        defineField({ name: 'supporting', title: 'Prateći tekst', type: 'text', rows: 2 }),
        defineField({
          name: 'consequences',
          title: 'Posljedice',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Naslov', type: 'string' }),
                defineField({ name: 'text', title: 'Tekst', type: 'text', rows: 2 }),
              ],
            }),
          ],
        }),
        defineField({ name: 'closing', title: 'Zaključna rečenica', type: 'text', rows: 2 }),
      ],
    }),
    defineField({
      name: 'processSection',
      title: 'Sekcija: proces',
      type: 'object',
      description: 'Koraci se uređuju kao zasebni dokumenti "Koraci procesa".',
      fields: [defineField({ name: 'headline', title: 'Naslov', type: 'string' })],
    }),
    defineField({
      name: 'deepDiveSection',
      title: 'Sekcija: istaknuta kategorija (vodovod)',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Naslov', type: 'string' }),
        defineField({ name: 'supporting', title: 'Prateći tekst', type: 'text', rows: 2 }),
        defineField({ name: 'problems', title: 'Problemi (popis)', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'closing', title: 'Zaključna rečenica', type: 'text', rows: 2 }),
        defineField({ name: 'ctaLabel', title: 'Tekst gumba', type: 'string' }),
        defineField({ name: 'ctaHref', title: 'Poveznica gumba', type: 'string' }),
      ],
    }),
    defineField({
      name: 'trustSection',
      title: 'Sekcija: način rada',
      type: 'object',
      description: 'Kartice se uređuju kao zasebni dokumenti "Način rada (kartice)".',
      fields: [defineField({ name: 'headline', title: 'Naslov', type: 'string' })],
    }),
    defineField({
      name: 'aboutSection',
      title: 'Sekcija: o nama',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Naslov', type: 'string' }),
        defineField({ name: 'paragraphs', title: 'Odlomci', type: 'array', of: [{ type: 'text' }] }),
      ],
    }),
    defineField({
      name: 'contactCta',
      title: 'Sekcija: poziv na kontakt',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Naslov', type: 'string' }),
        defineField({ name: 'supporting', title: 'Prateći tekst', type: 'text', rows: 2 }),
        defineField({ name: 'primaryCta', title: 'Primarni CTA', type: 'cta' }),
        defineField({ name: 'secondaryCta', title: 'Sekundarni CTA', type: 'cta' }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Naslovnica' }) },
});

const serviceCategory = defineType({
  name: 'serviceCategory',
  title: 'Kategorija usluga',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Naziv', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'index',
      title: 'Redni broj (prikaz)',
      type: 'string',
      description: 'Npr. "01" — prikazuje se na kartici.',
    }),
    defineField({
      name: 'priority',
      title: 'Redoslijed',
      type: 'number',
      description: 'Manji broj = viša pozicija na naslovnici.',
    }),
    defineField({ name: 'shortDescription', title: 'Kratki opis (naslovnica)', type: 'text', rows: 2 }),
    defineField({
      name: 'hint',
      title: 'Natuknica o poduslugama',
      type: 'string',
      description: 'Sitni tekst na kartici, npr. popis podusluga.',
    }),
    defineField({
      name: 'featured',
      title: 'Istaknuta kategorija',
      type: 'boolean',
      description: 'Istaknuta kategorija dobiva veliku tamnu karticu na vrhu popisa.',
      initialValue: false,
    }),
    defineField({ name: 'image', title: 'Fotografija / medij', type: 'image' }),
    defineField({ name: 'ctaLabel', title: 'Tekst gumba', type: 'string', initialValue: 'Saznajte više' }),
    defineField({ name: 'intro', title: 'Uvodni odlomci (stranica kategorije)', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'bullets', title: 'Što obuhvaća (popis)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'seoTitle', title: 'SEO naslov', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO opis', type: 'text', rows: 2 }),
  ],
  orderings: [
    { title: 'Po redoslijedu', name: 'priority', by: [{ field: 'priority', direction: 'asc' }] },
  ],
});

const subservice = defineType({
  name: 'subservice',
  title: 'Podusluga',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Naziv', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'parent',
      title: 'Nadređena kategorija',
      type: 'reference',
      to: [{ type: 'serviceCategory' }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'shortDescription', title: 'Kratki opis', type: 'text', rows: 2 }),
    defineField({ name: 'longDescription', title: 'Detaljni opis (odlomci)', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'seoTitle', title: 'SEO naslov', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO opis', type: 'text', rows: 2 }),
  ],
});

const processStep = defineType({
  name: 'processStep',
  title: 'Korak procesa',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Naslov', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'text', title: 'Tekst', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Redoslijed', type: 'number', validation: (r) => r.required() }),
  ],
  orderings: [{ title: 'Po redoslijedu', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
});

const trustCard = defineType({
  name: 'trustCard',
  title: 'Način rada (kartica)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Naslov', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'text', title: 'Tekst', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Redoslijed', type: 'number' }),
  ],
  orderings: [{ title: 'Po redoslijedu', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
});

const product = defineType({
  name: 'product',
  title: 'Proizvod (EV punionice)',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Naziv', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Opis', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Fotografija', type: 'image' }),
    defineField({ name: 'badge', title: 'Oznaka (npr. "Novo")', type: 'string' }),
    defineField({ name: 'order', title: 'Redoslijed', type: 'number' }),
  ],
  orderings: [{ title: 'Po redoslijedu', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
});

const contactPage = defineType({
  name: 'contactPage',
  title: 'Kontakt stranica',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Naslov', type: 'string' }),
    defineField({ name: 'supporting', title: 'Prateći tekst', type: 'text', rows: 2 }),
    defineField({ name: 'formTitle', title: 'Naslov obrasca', type: 'string' }),
    defineField({ name: 'privacyNote', title: 'Napomena o privatnosti', type: 'text', rows: 2 }),
    defineField({
      name: 'serviceOptions',
      title: 'Opcije "Vrsta usluge" u obrascu',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Kontakt stranica' }) },
});

export const schemaTypes = [
  cta,
  siteSettings,
  homepage,
  serviceCategory,
  subservice,
  processStep,
  trustCard,
  product,
  contactPage,
];
