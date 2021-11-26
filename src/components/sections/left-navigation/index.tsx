import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useImmer } from 'use-immer'
import React, { Fragment, useCallback } from 'react'
import clsx from 'clsx'
import Characters from './character'
import Town from './town'

interface Routes {
  name: string
  path: string
  childData: boolean
  childRenderer: React.ReactChild | null
  collapsed: boolean
  h: string
}

const routes: Routes[] = [{
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
  childRenderer: <Characters />,
  collapsed: true,
  h: 'h-[480px]',
}, {
  name: 'Towns',
  path: '',
  childData: true,
  childRenderer: <Town />,
  collapsed: true,
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

const LeftNavigation = () => {
  const [navigation, setNavigation] = useImmer(routes)

  const onToggle = useCallback((name) => {
    setNavigation((old: Routes[]) => {
      const nav = old.find((nv) => nv.name === name)
      if (nav) { nav.collapsed = !nav.collapsed }
    })
  }, [setNavigation])

  return (
    <nav className='font-titillium mr-0 sm:mr-3 hidden lg:block mb-10'>
      <ul className='py-2 px-2 bg-paper-general w-52 transition-general'>
        <div className='relative z-20'>
          {navigation.map((item:Routes) => (
            item.childData ? (
              <Fragment key={item.name}>
                <span
                  className='px-2 py-1 flex items-center hover:text-white cursor-pointer text-general hover:bg-gray-400 dark:hover:bg-gray-600'
                  onClick={() => onToggle(item.name)}
                >
                  <p className='mr-2'> {item.name}</p>
                  <ChevronDownIcon className={clsx(
                    item.collapsed ? 'transform rotate-0' : 'transform -rotate-180',
                    'w-5 h-5 transition-transform duration-300',
                  )}
                  />
                </span>
                <ul className={clsx(
                  item.collapsed ? 'opacity-0' : 'opacity-100',
                  item.collapsed ? 'h-0 overflow-hidden' : `${item.h} overflow-visible`,
                  'px-2.5 mt-1 transition-all duration-300',
                )}
                >
                  {item.childRenderer}
                </ul>
              </Fragment>
            ) : (
              <Link href={item.path} key={item.name}>
                <a>
                  <li className='hover:bg-sky-500 px-2 py-1 cursor-pointer hover:text-white text-general'>
                    {item.name}
                  </li>
                </a>
              </Link>
            )
          ))}
        </div>
      </ul>
    </nav>
  )
}

export default LeftNavigation
