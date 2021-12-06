/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import {
  secondClass, transcendentClass, thirdClass, CHARACTER_,
} from 'constant/characters'
import { ChevronDoubleDownIcon, CheckCircleIcon } from '@heroicons/react/solid'
import clsx from 'clsx'

export interface LAST_PATH_PROPS {
  data: CHARACTER_ | null
  selectedCharacter: CHARACTER_ | null
  // eslint-disable-next-line no-unused-vars
  setSelectedCharacter: (data: CHARACTER_ | null) => void
}

const LastPath = (props: LAST_PATH_PROPS) => {
  const {
    data, setSelectedCharacter, selectedCharacter,
  } = props
  const secondClassData = [
    ...secondClass,
    ...transcendentClass,
    ...thirdClass,
  ].filter((cls) => cls.characterId === data?.characterId && cls.pathId === data?.pathId)

  return (
    <div className='grid grid-cols-1 gap-3 mt-3'>
      {secondClassData.map((cls) => (
        <div className='flex flex-col items-center' key={cls.name}>
          {selectedCharacter?.name === cls.name ? (
            <CheckCircleIcon className='w-5 h-5 mb-2 text-green-600' />
          ) : (
            <ChevronDoubleDownIcon className={`w-5 h-5 mb-2 ${data?.textColor}`} />
          )}
          <div className={clsx(
            selectedCharacter?.name === cls.name ? data?.bgColor : 'dark:bg-gray-500 bg-gray-400',
            'p-1 mb-1 flex flex-col items-center cursor-pointer hover:opacity-75 transition-all duration-300',
          )}
          >
            <img
              alt={cls.name}
              height={54}
              src={cls.img}
              width={54}
              onClick={
                () => setSelectedCharacter(cls)
              }
            />
          </div>
          <span>{cls.name}</span>
        </div>
      ))}
    </div>
  )
}

export default LastPath
