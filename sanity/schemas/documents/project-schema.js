import { defineType, defineField, defineArrayMember } from 'sanity';

const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fieldsets: [
    {
      name: 'projectContent',
      title: 'Project Content',
    },
    {
      name: 'metaData',
      title: 'Meta Data',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      fieldset: 'projectContent',
      description: 'Title of the project',
      type: 'string',
    }),
    defineField({
      name: 'tagLine',
      title: 'Tag Line',
      fieldset: 'projectContent',
      description: 'Short, quick blurb to hook readers',
      type: 'string',
    }),
    defineField({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      fieldset: 'projectContent',
      description: 'Main image used as the header for the project',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          description: 'Text description of the image for accessibility',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      fieldset: 'projectContent',
      description: 'Rank projects from 1 to 999 in the order they should appear',
      type: 'number',
    }),
    defineField({
      name: 'colorTheme',
      title: 'Color Theme',
      type: 'string',
      options: {
        list: [
          'red',
          'orange',
          'amber',
          'yellow',
          'lime',
          'green',
          'emerald',
          'teal',
          'cyan',
          'sky',
          'blue',
          'indigo',
          'violet',
          'purple',
          'fuchsia',
          'pink',
          'rose',
        ],
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      fieldset: 'projectContent',
      description: 'The content of the project',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineArrayMember({
          type: 'image',
         // options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        }),
       
        defineArrayMember({
          name: 'embed',
          type: 'object',
          title: 'Embed',
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              title: 'Embed URL',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      fieldset: 'projectContent',
      type: 'imageGallery',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        "Used to index the project on the site. Click 'Generate' to create auto-magically from the Title field",
      type: 'slug',
      fieldset: 'metaData',
      options: { source: 'title' },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      description: 'Person who authored this project',
      type: 'reference',
      fieldset: 'metaData',
      to: { type: 'author' },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description: 'Category of the project',
      type: 'reference',
      fieldset: 'metaData',
      to: { type: 'projectCategory' },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      fieldset: 'metaData',
      description: 'Tags to help categorize and filter the project',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      fieldset: 'metaData',
      description: 'A direct link to the project, a codesandbox, or some external resource.',
      type: 'externalLink',
    }),
  ],
});

export default project;
