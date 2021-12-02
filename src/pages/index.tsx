/* eslint-disable max-len */
import Head from 'next/head'
import Layout from 'components/layouts/default-layout'
import React from 'react'
import Alert from 'components/common/alert'
import Welcome from 'components/sections/welcome'
import RelatedArticles from 'components/sections/related-articles'
import Contribution from 'components/sections/contribution'
import NewsAndUpdates from 'components/sections/news-and-updates'

const alertContent = (
  <p className='ml-3'>
    This website was created for the purpose of being a <strong>PORTFOLIO</strong> and for <strong>PERSONAL</strong> use only. Everything in this website just a <strong>DEMO</strong>
  </p>
)

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Elfun</title>
      <meta content='Information for game Elsword' name='description' />
      <meta content='Elsword, MMORPG, Hit and Slash' name='keywords' />
      <link href='/favicon.ico' rel='icon' />
    </Head>
    <main className='text-general'>
      <Alert text={alertContent} variant='info' />
      <section className='px-2 mb-10'>
        <Welcome />
        <RelatedArticles />
        <NewsAndUpdates />
        <Contribution />
      </section>
    </main>
  </React.Fragment>
)

Home.getLayout = (page:React.ReactElement) => (
  <Layout>
    {page}
  </Layout>
)

export default Home
