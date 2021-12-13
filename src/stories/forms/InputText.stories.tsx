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
    },
    label: {
      description: 'Label for the input field',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder of the input field',
    },
    register: {
      control: false,
      description: 'Inner ref of `react-hook-form`',
    },
    errors: {
      control: { type: 'text' },
      description: 'This object provided by `react-hook-form` to display error message. The actual data type for `errors` is `object` but we make this docs flexible. So you can try the error message in this example',
    },
    className: {
      description: 'Additional `className` for styling the input field',
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
  const { errors } = args
  const newArgs = {
    ...args,
    name: 'name',
    errors: {
      name: {
        message: errors,
      },
    },
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
