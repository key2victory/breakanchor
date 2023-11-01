import { defineType, defineField } from 'sanity';

// import colors from 'tailwindcss/colors';

// const colorList = {
//   red: colors.red,
//   orange: colors.orange,
//   amber: colors.amber,
//   yellow: colors.yellow,
//   lime: colors.lime,
//   green: colors.green,
//   emerald: colors.emerald,
//   teal: colors.teal,
//   cyan: colors.cyan,
//   sky: colors.sky,
//   blue: colors.blue,
//   indigo: colors.indigo,
//   violet: colors.violet,
//   purple: colors.purple,
//   fuchsia: colors.fuchsia,
//   pink: colors.pink,
//   rose: colors.rose,
// };

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
