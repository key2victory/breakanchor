import { defineType, defineField, defineArrayMember } from 'sanity';
import colors from 'tailwindcss/colors';

const colorList = {
  red: colors.red,
  orange: colors.orange,
  amber: colors.amber,
  yellow: colors.yellow,
  lime: colors.lime,
  green: colors.green,
  emerald: colors.emerald,
  teal: colors.teal,
  cyan: colors.cyan,
  sky: colors.sky,
  blue: colors.blue,
  indigo: colors.indigo,
  violet: colors.violet,
  purple: colors.purple,
  fuchsia: colors.fuchsia,
  pink: colors.pink,
  rose: colors.rose,
};

const colorPalettes = Object.entries(colorList).map(([key, _]) => ({
  [key]: {
    primaryBg: `bg-${key}-500`,
    hoverBg: `bg-${key}-500`,
    primaryText: `text-${key}-500`,
  },
}));

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
      //   Object.entries(value).map(([key, value]) =>
      //   defineField({ name: key, title: value, type: 'string' }),
      // ),
      // list: Object.entries(colors).map(([key, value]) => key)
    }),
    // defineField({
    //   name: 'colorTheme',
    //   title: 'Color Theme',
    //   type: 'color',
    //   readOnly: ({ currentUser }) =>
    //     !currentUser.roles.find(({ name }) => name === 'administrator'),
    //   options: {
    //     disableAlpha: true,
    //     colorList: [
    //       '#ef4444',
    //       '#f97316',
    //       '#f59e0b',
    //       '#eab308',
    //       '#84cc16',
    //       '#22c55e',
    //       '#10b981',
    //       '#14b8a6',
    //       '#06b6d4',
    //       '#0ea5e9',
    //       '#3b82f6',
    //       '#6366f1',
    //       '#8b5cf6',
    //       '#a855f7',
    //       '#d946ef',
    //       '#ec4899',
    //       '#f43f5e',
    //     ],
    //   },
    // }),
  ],
});

export default projectCategory;
