import { Meta, Story } from '@storybook/react'
import Button, { TYPE_BUTTON } from '../components/common/button'

export default {
  component: Button,
  title: 'Components/Button',
} as Meta

const Template: Story<TYPE_BUTTON> = (args) => <Button {...args} />

export const PrimarySolid = Template.bind({})

PrimarySolid.args = {
  label: 'Button',
  variant: 'primary-solid',
  size: 'md',
  type: 'button',
  fluid: true,
}
