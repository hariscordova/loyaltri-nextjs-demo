import { defineType, defineField } from 'sanity';

export const simpleAuthorType = defineType({
  name: 'simpleAuthor', // Unique name for the document type
  title: 'Simple Author', // Display name in the Studio
  type: 'document', // Defines this as a document type
  fields: [
    // Single string field for author's name
    defineField({
      name: 'name',
      type: 'string',
      title: 'Author Name', // Field label in the Studio
    }),
    // Author image (optional)
    defineField({
      name: 'image',
      type: 'image',
      title: 'Author Image',
    }),
  ],
});
