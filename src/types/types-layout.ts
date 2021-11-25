import { ReactElement } from 'react'
import { NextPage } from 'next'

// eslint-disable-next-line no-unused-vars
type GetLayoutFunc = (page: ReactElement) => ReactElement
export type NextPageWithLayout = NextPage & {
  getLayout: GetLayoutFunc
}
