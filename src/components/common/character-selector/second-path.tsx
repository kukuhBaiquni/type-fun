/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ChevronDoubleDownIcon, CheckCircleIcon } from '@heroicons/react/solid'
import { firstClass, CHARACTER_ } from 'constant/characters'
import clsx from 'clsx'
import LastPath from './last-path'

export interface SECOND_PATH_PROPS {
  data: CHARACTER_ | null
  selectedCharacter: CHARACTER_ | null
  // eslint-disable-next-line no-unused-vars
  setSelectedCharacter: (data: CHARACTER_ | null) => void
}

const SecondPath = (props: SECOND_PATH_PROPS) => {
  const { data, setSelectedCharacter, selectedCharacter } = props
  const firstClassData = firstClass.filter((cls) => cls.characterId === data?.characterId)

  return (
    <div className={clsx(
      firstClassData?.length === 3 ? 'grid-cols-3' : 'grid-cols-4',
      'grid gap-3 mt-1',
    )}
    >
      {firstClassData.map((item) => (
        <React.Fragment key={item.name}>
          <div className='flex flex-col items-center'>
            {selectedCharacter?.name === item.name ? (
              <CheckCircleIcon className='w-5 h-5 mb-2 text-green-600' />
            ) : (
              <ChevronDoubleDownIcon className={`w-5 h-5 mb-2 ${data?.textColor}`} />
            )}
            <div className={clsx(
              selectedCharacter?.name === item?.name
                ? data?.bgColor
                : 'dark:bg-gray-500 bg-gray-400',
              'p-1 mb-1 flex flex-col items-center cursor-pointer hover:opacity-75 transition-all duration-300',
            )}
            >
              <img
                alt={item.name}
                height={54}
                src={item.img}
                width={54}
                onClick={() => setSelectedCharacter(item)}
              />
            </div>
            <span>{item.name}</span>
            <LastPath
              data={item}
              selectedCharacter={selectedCharacter}
              setSelectedCharacter={setSelectedCharacter}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default SecondPath
