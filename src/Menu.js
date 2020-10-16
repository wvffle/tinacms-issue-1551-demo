import React from 'react'
import { useFormScreenPlugin, useForm, useCMS } from 'tinacms'
import { Link } from 'react-router-dom'

export default function Header() {
  const cms = useCMS()
  const [values, form] = useForm({
    label: 'Header',
    fields: [
      {
        label: 'Menu links',
        name: 'links',
        component: 'group-list',

        itemProps (item) {
          return {
            key: item.key,
            label: item.label
          }
        },

        defaultItem () {
          return {
            label: 'home',
            path: '/',
            key: Math.random().toString(36).substr(2, 9)
          }
        },

        fields: [
          {
            label: 'Name',
            name: 'label',
            component: 'text',
          },
          {
            label: 'Path',
            name: 'path',
            component: 'text',
          }
        ]
      }
    ],

    async loadInitialValues() {
      return {
        links: [
          {
            label: 'about',
            path: '/about',
            key: 'dii5l1juq'
          },
          {
            label: 'contact',
            path: '/contact',
            key: 'd5d1aimcn'
          }
        ]
      }
    },

    async onSubmit() {
      cms.alerts.warn('Not implemented!')
    }
  })

  useFormScreenPlugin(form)

  return (<nav>
            <Link to="/">{values.title}<br /><strong>{values.subtitle}</strong></Link>
            <ul className="ml-auto">
              {values.links && values.links.map(({ path, label, key }) => (
                <li key={key}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>)
}
