/* eslint-disable @typescript-eslint/no-empty-function */
import React, { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'

export interface MODAL_PROPS {
  isVisible?: boolean
  closeModal?: () => void
  render: React.ReactElement
  persist?: boolean
  size?: string
}

const Modal = (props: MODAL_PROPS) => {
  const cancelButtonRef = useRef(null)
  const {
    isVisible, closeModal = () => {}, render, persist, size = 'max-w-lg',
  } = props

  return (
    <Transition.Root as={Fragment} show={persist || isVisible}>
      <Dialog
        as='div'
        className='fixed z-50 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        onClose={closeModal}
      >
        <div className='flex items-end sm:items-center justify-center min-h-screen sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-75 transition-opacity' />
          </Transition.Child>
          <span aria-hidden='true' className='hidden sm:inline-block sm:align-middle sm:h-screen'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className={clsx(
              size,
              'inline-block w-full bg-general whitespace-nowrap overflow-hidden shadow-xl',
              'sm:text-left text-general transform transition-all',
            )}
            >
              {render}
            </div>
          </Transition.Child>
        </div>
        <button className='hidden' ref={cancelButtonRef} type='button' />
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
