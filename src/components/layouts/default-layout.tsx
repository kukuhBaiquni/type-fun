import LeftNavigation from 'components/sections/left-navigation'
import RightNavigation from 'components/sections/right-navigation'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'

const Header = dynamic(
  () => import('../sections/header'),
  { ssr: false },
)

const ContributionLayout = (props: { children: ReactElement}) => {
  const { children } = props
  return (
    <div className='bg-general transition-all duration-300 min-h-screen'>
      <div className='fixed w-full z-30'>
        <Header />
      </div>
      <div className='mx-auto max-w-screen-2xl overflow-hidden'>
        <div className='w-full pt-20 sm:pt-24'>
          <div className='flex px-1.5'>
            <LeftNavigation />
            <div className='w-full transition-general'>
              {children}
            </div>
            <RightNavigation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContributionLayout
