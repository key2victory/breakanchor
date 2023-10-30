import { defineType, defineField, defineArrayMember } from 'sanity';

const externalLink = defineType({
  name: 'externalLink',
  type: 'object',
  title: 'External Link',
  fields: [
    defineField({
      name: 'enableLink',
      title: 'Enable Link?',
      description: 'Shows/hides the link button',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'linkName',
      title: 'Name',
      description: 'The text to display on the link button (16 characters max)',
      type: 'string',
      validation: (rule) => rule.max(16),
    }),
    defineField({
      name: 'linkUrl',
      title: 'URL',
      description: 'The link to an external resource (repository, code sandbox, etc)',
      type: 'url',
    }),
  ],
});

export default externalLink;
