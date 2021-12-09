/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import Head from 'next/head'
import Layout from 'components/layouts/default-layout'
import CharacterSelector from 'components/common/character-selector'

const Character = () => (
  <Fragment>
    <Head>
      <title>Elfun - Contributor</title>
      <meta content='Contribution guide for filling submission Character data form' name='description' />
      <meta content='Elfun Contribution Guide, Contribution Elfun, Elfun' name='keywords' />
    </Head>
    <main className='text-general px-2 bg-paper-general sm:p-3 sm:mb-10 mb-2 pt-3'>
      <CharacterSelector
        subtitle='Choose which character you want to add information:'
        title='Create Character Information'
      />
    </main>
  </Fragment>
)

Character.getLayout = (page: React.ReactElement) => (
  <Layout>
    {page}
  </Layout>
)

export default Character
