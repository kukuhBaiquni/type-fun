import { ReactElement } from 'react'
import BaseClass from './character/base-class'
import Town from './town/town'

export type TYPE_ROUTES = {
  name: string
  path: string
  childData: boolean
  childRenderer: ReactElement | null
  collapsed: boolean
  h: string
}

const routes: TYPE_ROUTES[] = [{
  name: 'Main Page',
  path: '/',
  childData: false,
  childRenderer: null,
  collapsed: true,
  h: '0',
}, {
  name: 'Recent Changes',
  path: '/changes',
  childData: false,
  childRenderer: null,
  collapsed: true,
  h: '0',
}, {
  name: 'Characters',
  path: '',
  childData: true,
  childRenderer: <BaseClass />,
  collapsed: false,
  h: 'h-[480px]',
}, {
  name: 'Towns',
  path: '',
  childData: true,
  childRenderer: <Town />,
  collapsed: false,
  h: 'h-[540px]',
}, {
  name: 'Equipments',
  path: '/equipments',
  childData: false,
  childRenderer: null,
  collapsed: true,
  h: '0',
}, {
  name: 'Npc\'s',
  path: '/npcs',
  childData: false,
  childRenderer: null,
  collapsed: true,
  h: '0',
}, {
  name: 'Titles',
  path: '/titles',
  childData: false,
  childRenderer: null,
  collapsed: true,
  h: '0',
}, {
  name: 'Ice Burner (Costumes)',
  path: '/ice-burners',
  childData: false,
  childRenderer: null,
  collapsed: true,
  h: '0',
}, {
  name: 'Character Systems',
  path: '/character-systems',
  childData: false,
  childRenderer: null,
  collapsed: true,
  h: '0',
}, {
  name: 'Miscellaneous',
  path: '/miscellaneous',
  childData: false,
  childRenderer: null,
  collapsed: true,
  h: '0',
}]

export default routes
