import { Meta, Story } from '@storybook/react'
import LeftNavigation from '../components/sections/left-navigation'

export default {
  component: LeftNavigation,
  title: 'Components/Sections/LeftNavigation',
  parameters: {
    docs: {
      description: {
        component: 'Component for displaying list of navigation link. This component only used by ``/components/layouts/*`` for **persistent display**.'
        + ' This component affected by theme toggler in ``/components/sections/header``',
      },
    },
  },
} as Meta

const Template: Story = () => <LeftNavigation />

export const LeftNavigationMain = Template.bind({})
