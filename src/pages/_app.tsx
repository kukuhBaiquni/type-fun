import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ReactNode } from 'react'
import { NextPageWithLayout } from 'types/types-layout'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

type Props = {
  Component: NextPageWithLayout
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  pageProps: any
}

function MyApp({ Component, pageProps }: AppProps & Props) {
  const getLayout = Component.getLayout || ((page:ReactNode) => page)
  return getLayout(
    <Component {...pageProps} />,
  )
}

export default MyApp
