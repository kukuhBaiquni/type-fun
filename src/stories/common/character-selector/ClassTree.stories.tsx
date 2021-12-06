/* eslint-disable @typescript-eslint/no-empty-function */
import { Meta, Story } from '@storybook/react'
import React from 'react'
import ClassTree, { CLASS_TREE_PROPS } from 'components/common/character-selector/class-tree'
import { baseClass } from 'constant/characters'

export default {
  title: 'Components/common/character-selector/class-tree',
  component: ClassTree,
  parameters: {
    docs: {
      description: {
        component: 'Component for displaying character path inside `modal`',
      },
    },
  },
  argTypes: {
    data: {
      description: 'Selected `baseClass` will show character path inside `modal`. As you can see, the select options is a number, it represent `characterIndex`',
      options: baseClass.map((_, index) => index),
      control: { type: 'select' },
    },
    selectedCharacter: {
      description: 'Character path data that choosed inside modal',
      control: false,
    },
    setSelectedCharacter: {
      description: 'Function for storing selected character path inside modal',
      control: false,
    },
    closeModal: {
      description: 'Function for close modal',
      control: false,
    },
  },
} as Meta

const Template: Story<CLASS_TREE_PROPS> = (args) => {
  const { data } = args
  if (typeof data === 'number') {
    args.data = baseClass[data]
  }
  return <ClassTree {...args} />
}

Template.args = {
  data: baseClass[0],
  selectedCharacter: null,
  setSelectedCharacter: () => {},
  closeModal: () => {},
}

export const SelectedAisha = Template.bind({})

SelectedAisha.args = {
  ...Template.args,
  data: baseClass[1],
}
