/* eslint-disable @typescript-eslint/no-empty-function */
import { Meta, Story } from '@storybook/react'
import React from 'react'
import LastPath, { LAST_PATH_PROPS } from 'components/common/character-selector/last-path'
import { baseClass } from 'constant/characters'

export default {
  title: 'Components/common/character-selector/last-path',
  component: LastPath,
  parameters: {
    docs: {
      description: {
        component: 'Component for displaying character path inside `modal`. Actually this component only displaying `secondClass` and further character path, but there are the `firstClass` character path is displayed.',
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
  },
} as Meta

const Template: Story<LAST_PATH_PROPS> = (args) => {
  const { data } = args
  if (typeof data === 'number') {
    args.data = baseClass[data]
  }
  return <LastPath {...args} />
}

Template.args = {
  data: baseClass[0],
  selectedCharacter: null,
  setSelectedCharacter: () => {},
}

export const LastPathExample = Template.bind({})

LastPathExample.args = {
  ...Template.args,
  data: baseClass[1],
}
