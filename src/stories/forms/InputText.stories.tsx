import { Meta, Story } from '@storybook/react'
import InputText, { INPUT_TEXT_PROPS } from 'components/forms/input-text'
import { useForm } from 'react-hook-form'

export default {
  component: InputText,
  title: 'Components/forms/input-text',
  name: 'Components/forms/input-text',
  argTypes: {
    name: {
      control: false,
      description: 'Name for register in `react-hook-form`',
      defaultValue: {
        summary: 'empty',
      },
    },
    label: {
      description: 'Label for the input field',
      defaultValue: {
        summary: 'empty',
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder of the input field',
      defaultValue: {
        summary: 'empty',
      },
    },
    register: {
      description: 'Inner ref of `react-hook-form`',
      defaultValue: {
        summary: 'empty',
      },
    },
    errors: {
      control: false,
      description: 'This object provided by `react-hook-form` to display error message',
      defaultValue: {
        summary: '{}',
      },
    },
    className: {
      description: 'Additional `className` for styling the input field',
      defaultValue: {
        summary: 'empty',
      },
    },
    disabled: {
      description: 'Disabled state of input',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Component for collecting informations from user input',
      },
    },
  },
} as Meta

const Template: Story<INPUT_TEXT_PROPS> = (args) => {
  const { register } = useForm()
  const newArgs = {
    ...args,
    name: 'name',
    errors: {},
    register,
  }

  return <InputText {...newArgs} />
}

export const InputTextMain = Template.bind({})

InputTextMain.args = {
  name: 'name',
  label: 'Name',
  placeholder: 'Name..',
  disabled: false,
  className: 'bg-transparent',
}
