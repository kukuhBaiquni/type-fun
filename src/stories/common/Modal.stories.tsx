/* eslint-disable @typescript-eslint/no-empty-function */
import { Meta, Story } from '@storybook/react'
import Modal, { MODAL_PROPS } from 'components/common/modal'
import React, { useState } from 'react'
import Button from 'components/common/button'

export default {
  component: Modal,
  title: 'Components/common/modal',
  argTypes: {
    isVisible: {
      description: 'If `true` modal will appear',
    },
    closeModal: {
      description: 'This function will be called when modal is closed, don\'t add return value to this function',
    },
    render: {
      description: 'Valid `React Element` to render inside modal',
    },
    persist: {
      description: 'If `true` the modal will not be closed',
    },
    size: {
      description: 'Valid Tailwind className for `width/max-width` property. The example only have few options, you can customize it freely.',
      options: [
        'max-w-sm',
        'max-w-md',
        'max-w-screen-md',
        'max-w-[100px]',
      ],
      control: { type: 'select' },
      defaultValue: {
        summary: 'max-w-lg',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Component for displaying popup with content/message',
      },
    },
  },
} as Meta

const Template: Story<MODAL_PROPS> = (args) => {
  const [isVisible, setIsVisible] = useState(false)
  const copyArgs = { ...args }
  delete copyArgs.isVisible
  delete copyArgs.closeModal
  return (
    <React.Fragment>
      <Button label='Show Modal' onClick={() => setIsVisible(true)} />
      <Modal
        closeModal={() => setIsVisible(false)}
        isVisible={isVisible}
        {...copyArgs}
      />
    </React.Fragment>
  )
}

export const ModalMain = Template.bind({})

ModalMain.args = {
  closeModal: () => { },
  render: (
    <div className='bg-lime-500 p-3'>
      <h3>Here is modal content</h3>
    </div>
  ),
  persist: false,
  size: 'max-w-lg',
}
