/* eslint-disable max-len */
import Head from 'next/head'
import Layout from 'components/layouts/default-layout'
import React from 'react'
import Image from 'next/image'
import articles, {
  elswordWorldMap, demonRealmsMap, lurensiaIsland, fluoneIsland,
} from 'constant/articles'
import loader from 'components/common/image-loader'
import TOWNS from 'constant/towns'
import CONTINENT from 'constant/continent'
import DUNGEONS from 'constant/dungeons'
import clsx from 'clsx'

const info = articles[0]
const assetList = [
  { img: elswordWorldMap, name: 'Elsword World' },
  { img: demonRealmsMap, name: 'Demon Realms' },
  { img: lurensiaIsland, name: 'Lurensia Island' },
  { img: fluoneIsland, name: 'Fluone Island' },
]

const lurensiaTown = CONTINENT.teritory.filter((item) => item.name === 'Lurensia').map((item) => ({
  ...item,
  towns: TOWNS.filter((town) => town.continent === 'lurensia').map((town) => ({
    ...town,
    dungeons: DUNGEONS.filter((dungeon) => dungeon.townId === town.townId),
  })),
}))

const fluoneTown = CONTINENT.teritory.filter((item) => item.name === 'Fluone').map((item) => ({
  ...item,
  towns: TOWNS.filter((town) => town.continent === 'fluone').map((town) => ({
    ...town,
    dungeons: DUNGEONS.filter((dungeon) => dungeon.townId === town.townId),
  })),
}))

const demonRealmsTown = CONTINENT.teritory.filter((item) => item.name === 'Demon Realms').map((item) => ({
  ...item,
  towns: TOWNS.filter((town) => town.continent === 'demon realms').map((town) => ({
    ...town,
    dungeons: DUNGEONS.filter((dungeon) => dungeon.townId === town.townId),
  })),
}))

const otherLocationTown = CONTINENT.teritory.filter((item) => item.name === 'Other Location').map((item) => ({
  ...item,
  towns: TOWNS.filter((town) => town.continent === 'other location').map((town) => ({
    ...town,
    dungeons: DUNGEONS.filter((dungeon) => dungeon.townId === town.townId),
  })),
}))

const continents = [lurensiaTown, fluoneTown, demonRealmsTown, otherLocationTown]

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
        <h3 className='text-2xl font-semibold font-titillium text-sky-500'>{CONTINENT.name}</h3>
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
          <p>{CONTINENT.description}</p>
        </div>
      </section>
      {continents.map((continent) => continent.map((item) => (
        <section key={item.name}>
          <h3 className='text-xl font-titillium text-sky-500'>{item.name}</h3>
          <div className='mt-2 mb-4 border-general border-l-0 border-b-0 border-r-0 pt-2'>
            <p>{item.description}</p>
          </div>
          <div className='p-2 bg-paper-general grid grid-cols-1 gap-y-5'>
            {item.towns.map((town, index) => (
              <div key={index}>
                <h3 className={clsx('font-titillium', town.textColor)}>{town.name}</h3>
                <p>{town.description}</p>
                <div className='flex items-center flex-wrap gap-2 mt-2'>
                  {town.dungeons.map((dungeon) => (
                    <div className={clsx(town.bgColor, 'py-1 px-2.5 font-titillium rounded')} key={dungeon.name}>
                      <p className={clsx(
                        'text-sm ',
                        town.hoverTextColor ? 'text-gray-700' : 'text-white',
                      )}
                      >
                        {dungeon.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )))}
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
    </main>
  </React.Fragment>
)

ElswordWorld.getLayout = (page:React.ReactElement) => (
  <Layout>
    {page}
  </Layout>
)

export default ElswordWorld
