/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { baseClass, CHARACTER_ } from 'constant/characters'
import Modal from 'components/common/modal'

interface CHARACTER_SELECTOR_PROPS{
  title: string
  subtitle: string
  description?: string
}

const CharacterSelector = (props: CHARACTER_SELECTOR_PROPS) => {
  const { title, subtitle, description } = props
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [data, setData] = useState<CHARACTER_ | null>(null)
  const [selectedCharacter, setSelectedCharacter] = useState<CHARACTER_ | null>({} as CHARACTER_)

  const showModalAndSetData = (character: CHARACTER_) => {
    setIsVisible(true)
    setData(character)
  }

  useEffect(() => {
    if (isVisible) setSelectedCharacter(null)
  }, [isVisible])
  return (
    <React.Fragment>
      <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>
        {title}
      </h2>
      <p className='my-2'>
        {subtitle}
      </p>
      <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 max-w-screen-sm'>
        {baseClass.map((item) => (
          <button
            className={clsx(
              'p-1 flex items-center hover:opacity-70',
              item.bgColor,
            )}
            key={item.name}
            type='button'
            onClick={() => showModalAndSetData(item)}
          >
            <img alt={item.name} height={20} src={item.img} width={20} />
            <span className={clsx(
              item.hoverTextColor ? 'text-gray-600' : 'text-white',
              'ml-2 font-titillium',
            )}
            >
              {item.name}
            </span>
          </button>
        ))}
      </div>
      {/* <Modal
        closeModal={() => setIsVisible(false)}
        isVisible={isVisible}
        render={(
          <ClassTree
            closeModal={() => setIsVisible(false)}
            data={data}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
        )}
      /> */}
    </React.Fragment>
  )
}

export default CharacterSelector
