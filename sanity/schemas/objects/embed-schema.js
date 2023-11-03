// schema/youtube.ts
import {defineType, defineField} from 'sanity'

export const embed = defineType({
  name: 'embed',
  type: 'object',
  title: 'Embed',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Embed URL'
    })
  ]
})

