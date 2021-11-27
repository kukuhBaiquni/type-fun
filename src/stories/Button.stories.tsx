import { TrashIcon } from '@heroicons/react/solid'
import { Meta, Story } from '@storybook/react'
import Button, { TYPE_BUTTON } from 'components/common/button'

export default {
  component: Button,
  title: 'Components/Common/Button',
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
      description: 'Define size of a button',
      defaultValue: {
        summary: 'md',
      },
    },
    variant: {
      options: [
        'primary-solid', 'primary-outlined', 'danger-solid', 'danger-outlined', 'submit-solid', 'submit-outlined',
      ],
      control: { type: 'select' },
      description: 'Define variant of a button',
      defaultValue: {
        summary: 'primary-solid',
      },
    },
    type: {
      options: ['button', 'submit'],
      control: { type: 'radio' },
      description: 'HTML type of a button',
      defaultValue: {
        summary: 'button',
      },
    },
    label: {
      description: 'Text inside button',
    },
    fluid: {
      description: 'If \'true\' the button will expand relative to parent',
      defaultValue: {
        summary: false,
      },
    },
    onClick: {
      description: 'Event handler when button is clicked',
    },
    leftIcon: {
      description: 'Any ``ReactElement`` to display before text inside button',
      control: null,
    },
    rightIcon: {
      description: 'Any ``ReactElement`` to display after text inside button',
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Component for execute various command & user interactions',
      },
    },
  },
} as Meta

const Template: Story<TYPE_BUTTON> = (args) => <Button {...args} />

export const ButtonMain = Template.bind({})

ButtonMain.args = {
  label: 'Button',
  variant: 'primary-solid',
  size: 'md',
  type: 'button',
  fluid: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => { },
  leftIcon: null,
  rightIcon: null,
}

export const ButtonPrimaryWithLeftIcon = Template.bind({})

ButtonPrimaryWithLeftIcon.args = {
  ...ButtonMain.args,
  leftIcon: <TrashIcon className='w-5 h-5 mr-1' />,
}

ButtonPrimaryWithLeftIcon.parameters = {
  docs: {
    description: {
      story: 'Example of **Primary Button with Left Icon**, add ``margin-right`` to ``icon`` component to add space',
    },
  },
}

export const ButtonPrimaryWithRightIcon = Template.bind({})

ButtonPrimaryWithRightIcon.args = {
  ...ButtonMain.args,
  rightIcon: <TrashIcon className='w-5 h-5 ml-1' />,
}

ButtonPrimaryWithRightIcon.parameters = {
  docs: {
    description: {
      story: 'Example of **Primary Button with right Icon**, add ``margin-left`` to ``icon`` component to add space',
    },
  },
}

export const ButtonDangerWithLeftIcon = Template.bind({})

ButtonDangerWithLeftIcon.args = {
  ...ButtonMain.args,
  variant: 'danger-solid',
  leftIcon: <TrashIcon className='w-5 h-5 mr-1' />,
}

ButtonDangerWithLeftIcon.parameters = {
  docs: {
    description: {
      story: 'Example of **Danger Button with left Icon**',
    },
  },
}

export const ButtonDangerFluid = Template.bind({})

ButtonDangerFluid.args = {
  ...ButtonMain.args,
  variant: 'danger-solid',
  fluid: true,
}

ButtonDangerFluid.parameters = {
  docs: {
    description: {
      story: 'Example of **Danger Button with full width**',
    },
  },
}

export const ButtonPrimaryOutlined = Template.bind({})

ButtonPrimaryOutlined.args = {
  ...ButtonMain.args,
  variant: 'primary-outlined',
}

ButtonPrimaryOutlined.parameters = {
  docs: {
    description: {
      story: 'Example of **Primary Button Outlined**',
    },
  },
}

export const ButtonPrimaryOutlinedWithLeftIcon = Template.bind({})

ButtonPrimaryOutlinedWithLeftIcon.args = {
  ...ButtonMain.args,
  variant: 'primary-outlined',
  leftIcon: <TrashIcon className='w-5 h-5 mr-1' />,
}

ButtonPrimaryOutlinedWithLeftIcon.parameters = {
  docs: {
    description: {
      story: 'Example of **Primary Button Outlined with left icon**',
    },
  },
}
