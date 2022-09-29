import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cv.experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'isCurrent',
      title: 'Curretnly Working Here',
      type: 'boolean',
    }),
    defineField({
      name: 'startDate',
      title: 'Published at',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'Published at',
      type: 'date',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
