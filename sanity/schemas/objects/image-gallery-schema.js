import { defineType, defineField, defineArrayMember } from 'sanity';

const imageGallery = defineType({
  name: 'imageGallery',
  type: 'object',
  title: 'Image Gallery',
  fields: [
    defineField({
      name: 'addImageGallery',
      title: 'Enable the image gallery?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        defineArrayMember({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'display',
      type: 'string',
      title: 'Display as',
      description: 'How should the images be displayed?',
      options: {
        list: [
          { title: 'Vertically stacked (column)', value: 'stacked' },
          { title: 'In-line (row)', value: 'inline' },
          { title: 'Carousel', value: 'carousel' },
          { title: 'Grid', value: 'grid' },
        ],
        layout: 'radio',
      },
    }),
  ],
});

export default imageGallery;
