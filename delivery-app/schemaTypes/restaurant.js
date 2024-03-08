import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Dish description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'latitude of the restaurant',
    },
    {
      name: 'lng',
      type: 'number',
      title: 'longitude of the restaurant',
    },
    {
      name: 'adress',
      type: 'string',
      title: 'Restaurant Adress',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a number between 1 to 5',
      validation: (Rule) => Rule.required().min(1).max(5).error('Rating must be between 1 to 5'),
    },
    {
      name: 'reviews',
      type: 'string',
      title: 'Reviews',
    },
    {
        name: 'type',
        type: 'Category',
        validation: (Rule) => Rule.required(),
        type : 'reference',
        to : [{type : 'category'}]
      },
      {
        name: 'dishes',
        type: 'array',
        title: 'Dishes',
        of: [
          {
            type: 'reference',
            to: [{type: 'dish'}],
          },
        ],
      },
  ],
})
