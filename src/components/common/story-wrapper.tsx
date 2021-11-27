/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { Fragment, ReactElement } from 'react'

interface Props {
  children: ReactElement
}

const StoryWrapper = (props:Props) => {
  const { children } = props
  return (
    <Fragment>
      <Head>
        <link href='/favicon.ico' rel='icon' />
        <link href='https://fonts.gstatic.com' rel='preconnect' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito&display=swap&family=Titillium+Web:wght@400;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        {children}
      </body>
    </Fragment>
  )
}

export default StoryWrapper
