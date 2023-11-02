import { defineType, defineField } from 'sanity';

const projectCategory = defineType({
  name: 'projectCategory',
  title: 'Project Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Display name of the project category',
      type: 'string',
      readOnly: ({ currentUser }) =>
        !currentUser.roles.find(({ name }) => name === 'administrator'),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      description: 'Value of the project category',
      type: 'slug',
      options: { source: 'title' },
      readOnly: ({ currentUser }) =>
        !currentUser.roles.find(({ name }) => name === 'administrator'),
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
  ],
});

export default projectCategory;
