import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

const singletons = new Set(['siteSettings', 'homepage', 'contactPage']);

export default defineConfig({
  name: 'default',
  title: 'Electrical Installations',
  projectId: '4sqfr6zk',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Sadržaj')
          .items([
            S.listItem()
              .title('Postavke stranice')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Naslovnica')
              .id('homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.listItem()
              .title('Kontakt stranica')
              .id('contactPage')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),
            S.divider(),
            S.documentTypeListItem('serviceCategory').title('Kategorije usluga'),
            S.documentTypeListItem('subservice').title('Podusluge'),
            S.divider(),
            S.documentTypeListItem('processStep').title('Koraci procesa'),
            S.documentTypeListItem('trustCard').title('Način rada (kartice)'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter((t) => !singletons.has(t.schemaType)),
  },
  document: {
    actions: (actions, context) =>
      singletons.has(context.schemaType)
        ? actions.filter((a) => !['unpublish', 'delete', 'duplicate'].includes(a.action ?? ''))
        : actions,
  },
});
