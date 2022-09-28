import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'global-settings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutMe',
      title: 'About Me',
      type: 'block-content',
    }),
  ],
})
