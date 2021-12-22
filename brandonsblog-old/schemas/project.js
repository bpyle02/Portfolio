export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'projectType',
        title: 'Project Type',
        type: 'string',
        options: {
            list: [
                {value: 'personal', title: 'Personal'},
                {value: 'client', title: 'Client'},
                {value: 'school', title: 'School'},
                {value: 'professional', title: 'Professional'}
            ]
        }
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
          name: 'code',
          title: 'Code Link',
          type: 'url'
      },
      {
          name: 'demo',
          title: 'Live Demo Link',
          type: 'url'
      },
      {
          name: 'tags',
          type: 'array',
          of: [{ type: 'string'}],
          options: {
              layout: 'tags'
          }
      }
    ],
  
    // preview: {
    //   select: {
    //     title: 'title',
    //     author: 'author.name',
    //     media: 'mainImage',
    //   },
    //   prepare(selection) {
    //     const {author} = selection
    //     return Object.assign({}, selection, {
    //       subtitle: author && `by ${author}`,
    //     })
    //   },
    // },
  }
  