import Head from 'next/head'
import Layout from 'components/layouts/default-layout'
import { ReactElement } from 'react'

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta content='Generated by create next app' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>
      <main className='bg-pink-600'>asasd</main>
    </div>
  )
}

Home.getLayout = (page:ReactElement) => (
  <Layout>
    {page}
  </Layout>
)

export default Home
