import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sharedLink',
  type: 'document',
  title: 'Shared Link',
  fields: [
    defineField({
      title: 'id',
      name: 'ID',
      type: 'slug',
    }),
    defineField({
      title: 'link',
      name: 'link',
      type: 'link',
    }),
  ],
  preview: {
    select: {
      title: 'ID.current',
      subtitle: 'link.href',
    },
  },
})
