/* eslint-disable max-len */
import Head from 'next/head'
import Layout from 'components/layouts/default-layout'
import React from 'react'
import Image from 'next/image'
import articles, {
  elswordWorldMap, demonRealmsMap, lurensiaIsland, fluoneIsland,
} from 'constant/articles'
import loader from 'components/common/image-loader'

const info = articles[0]
const assetList = [
  { img: elswordWorldMap, name: 'Elsword World' },
  { img: demonRealmsMap, name: 'Demon Realms' },
  { img: lurensiaIsland, name: 'Lurensia Island' },
  { img: fluoneIsland, name: 'Fluone Island' },
]

const ElswordWorld = () => (
  <React.Fragment>
    <Head>
      <title>Elfun - Elsword World</title>
      <meta content='Information for game Elsword' name='description' />
      <meta content='Elsword, MMORPG, Hit and Slash' name='keywords' />
      <link href='/favicon.ico' rel='icon' />
    </Head>
    <main className='text-general px-2 mb-10 grid grid-cols-1 gap-y-5'>
      <section>
        <h3 className='text-2xl font-semibold font-titillium text-sky-500'>Elsword World</h3>
        <div className='mt-2 border-general border-l-0 border-b-0 border-r-0 pt-4'>
          <div className='relative mb-2 h-[250px] md:h-[550px]'>
            <Image
              alt='Elsword World'
              blurDataURL={loader('100%', '100%')}
              className='object-cover'
              layout='fill'
              placeholder='blur'
              priority
              src={info.img}
            />
          </div>
          <p>
            The Elsword World is the fantasy world created by KOG Studios,
            in which is depicted the story of Elsword.
            According to the Lore of Elsword, the world of Elrios was once a desolate with life being scarce.
            That all changed when the El was bestowed upon the land and life began to flourish.
            The all mighty Ellian Kingdom was born surrounding the El until the day of the El Explosion, scattering the El all across Elrios giving birth to many villages and kingdoms.
            The Elsword world consists of a major supercontinent called Elrios.
            This supercontinent split into two continents, Lurensia and Fluone, due to the explosion of the El in the Festival of Harmony.
          </p>
        </div>
      </section>
      <section className='grid grid-cols-4 gap-2'>
        {assetList.map((item, index) => (
          <div className='relative h-[200px]' key={index}>
            <Image
              alt={item.name}
              blurDataURL={loader('100%', '100%')}
              className='object-contain'
              height={200}
              placeholder='blur'
              src={item.img}
              width={300}
            />
            <p className='text-sm font-titillium'>{item.name}</p>
          </div>
        ))}
      </section>
      <section>
        <h3 className='text-xl font-titillium text-sky-500'>Lurensia</h3>
        <div className='mt-2 border-general border-l-0 border-b-0 border-r-0 pt-2'>
          <p>
            The Elrios supercontinent has been divided into two continents, Lurensia being the western one.
            Due to the El, Lurensia housed a fertile and prosperous environment and at the same time, filled it with the supreme energy of green earth.
          </p>
        </div>
      </section>
    </main>
  </React.Fragment>
)

ElswordWorld.getLayout = (page:React.ReactElement) => (
  <Layout>
    {page}
  </Layout>
)

export default ElswordWorld
