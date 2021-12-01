import { Meta, Story } from '@storybook/react'
import Alert, { TYPE_ALERT } from 'components/common/alert'

export default {
  component: Alert,
  title: 'Components/common/alert',
  argTypes: {
    variant: {
      options: ['info', 'success'],
      control: { type: 'radio' },
      description: 'Alert color',
      defaultValue: {
        summary: 'info',
      },
    },
    text: {
      description: 'Text inside alert',
      defaultValue: {
        summary: '-',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Component for displaying important message',
      },
    },
  },
} as Meta

const Template: Story<TYPE_ALERT> = (args) => <Alert {...args} />

export const AlertMain = Template.bind({})

AlertMain.args = {
  variant: 'info',
  text: 'This is important message, do not ignore this message, or you will fired!',
}

export const AlertSuccess = Template.bind({})

AlertSuccess.args = {
  variant: 'success',
  text: 'Data is successfully submited to the server',
}
