import Link from 'next/link'
import clsx from 'clsx'
import DUNGEONS from 'constant/dungeons'
import { TYPE_TOWN } from 'constant/towns'
import { ReactElement } from 'react'

interface Props {
  townId: number
  town: TYPE_TOWN
}

const Dungeon = (props: Props):ReactElement => {
  const { townId, town } = props
  const url = (text:string) => text.toLowerCase().replace(/\s/g, '-')
  const data = DUNGEONS.filter((dungeon) => dungeon.townId === townId)
  return (
    <ul className={clsx(
      'absolute floatig-list min-w-max z-10 hidden group-hover:flex flex-col top-0 left-28 bg-gray-200 dark:bg-gray-700',
      'drop-shadow-xl group-hover:translate-x-10 transition-transform duration-300',
    )}
    >
      {data.map((item) => (
        <li
          className={clsx(
            town.textColor,
            town.hoverBgColor,
            town.hoverTextColor || 'hover:text-white dark:hover:text-white',
            'job-nesting',
          )}
          key={item.name}
        >
          <Link href={`/character/${url(item.name)}`}>
            <a className='py-1 pl-2 pr-4 flex'>
              {item.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Dungeon
