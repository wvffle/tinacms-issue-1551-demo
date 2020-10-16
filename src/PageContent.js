import React from 'react'
import { useCMS, useForm, usePlugin } from 'tinacms'

export default function PageContent() {
  const cms = useCMS()
    const [values, form] = useForm({
      label: 'Edit Page',
      fields: [
          {
              label: 'Images',
              name: 'items',
              component: 'group-list',
              itemProps (item) {
                  return {
                      key: item.key,
                      label: item.caption || 'Uncaptioned image'
                  }
              },

              defaultItem () {
                  return {
                      url: '',
                      caption: '',
                      key: Math.random().toString(36).substr(2, 9)
                  }
              },

              fields: [
                  {
                      label: 'Caption',
                      name: 'caption',
                      component: 'text'
                  },
                  {
                      label: 'Image',
                      name: 'url',
                      component: 'image',

                      async previewSrc(values, { input }) {
                          return 'https://via.placeholder.com/666'
                      },

                      uploadDir: () => {
                          return '/'
                      },

                      parse: filename => `../images/${filename}`
                  }
              ]
          },
      ],
      async loadInitialValues() {
          return {
              items: [
                  {
                      url: 'https://via.placeholder.com/666',
                      caption: '',
                      key: '3t2q655gi'
                  },
                  {
                      url: 'https://via.placeholder.com/666',
                      caption: '',
                      key: 'd5d1aimcn'
                  },
              ]
          }
      },
      async onSubmit() {
          cms.alerts.warn('Not implemented!')
      },
  })
  usePlugin(form)

  return (
    <section className="App-header">
      {values.items && values.items.map((item, i) => (<h1 key={item.key}>{i}: {item.label}</h1>))}
    </section>
  );
}
