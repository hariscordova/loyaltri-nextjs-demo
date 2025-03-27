import { defineType, defineField } from 'sanity';

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title (H1)',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug (URL)',
      options: {
        source: 'title', // Automatically generates a slug from title
        maxLength: 96,
      },
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    }),
    defineField({
      name: 'content',
      type: 'text',
      title: 'Content (Paragraph)',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Header Image',
    }),
  ]
})