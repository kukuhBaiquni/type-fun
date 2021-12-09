/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { XIcon } from '@heroicons/react/solid'
import { CHARACTER_ } from 'constant/characters'
import clsx from 'clsx'
import SecondPath from './second-path'

export type CLASS_TREE_PROPS = {
  data: CHARACTER_ | null
  selectedCharacter: CHARACTER_ | null
  // eslint-disable-next-line no-unused-vars
  setSelectedCharacter: (data: CHARACTER_ | null) => void
  closeModal?: () => void
}

const ClassTree = (props: CLASS_TREE_PROPS) => {
  const {
    data, selectedCharacter, setSelectedCharacter, closeModal,
  } = props
  const { push, pathname } = useRouter()

  return (
    <Fragment>
      <div className={clsx(
        data?.bgColor,
        data?.hoverTextColor
          ? 'text-gray-600'
          : 'text-white',
        'py-2 px-3 text-lg flex justify-between items-center',
      )}
      >
        <h5>Choose Character Path</h5>
        <XIcon className='w-6 h-6 cursor-pointer' onClick={closeModal} />
      </div>
      <div className='p-2 mt-3 flex flex-col sm:text-sm text-xs font-titillium'>
        <div className='flex flex-col justify-center items-center'>
          <div className={clsx(
            selectedCharacter?.name === data?.name
              ? data?.bgColor
              : 'dark:bg-gray-500 bg-gray-400',
            'p-1 mb-1 flex flex-col items-center cursor-pointer hover:opacity-75 transition-all duration-300 relative',
          )}
          >
            <img
              alt={data?.name}
              height={54}
              src={data?.img}
              width={54}
              onClick={() => setSelectedCharacter(data)}
            />
          </div>
          <span>{data?.name}</span>
          <SecondPath
            data={data}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
        </div>
        <button
          className={clsx(
            data?.bgColor,
            data?.hoverTextColor
              ? 'text-gray-600'
              : 'text-white',
            'text-base px-12 py-2 rounded ml-auto hover:opacity-75 sm:w-3/4 disabled:bg-gray-500',
            'disabled:cursor-not-allowed mt-8 mb-0 sm:mb-2 w-full mx-auto transition-all duration-300',
          )}
          disabled={!selectedCharacter}
          type='button'
          onClick={() => push({
            pathname: `${pathname}/create`,
            query: {
              characterId: selectedCharacter?.characterId,
              classId: selectedCharacter?.classId,
              pathId: selectedCharacter?.pathId,
            },
          })}
        >
          Start Now!
        </button>
      </div>
    </Fragment>
  )
}

export default ClassTree
