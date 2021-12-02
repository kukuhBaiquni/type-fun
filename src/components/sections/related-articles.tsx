/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import loader from 'components/common/image-loader'
import clsx from 'clsx'
import articles from 'constant/articles'

const RelatedArticles = () => (
  <div className='mt-8'>
    <h3 className='text-2xl font-semibold font-titillium text-sky-500'>Related Articles</h3>
    <p className='mt-2'>
      You can read these articles to get more details information
    </p>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4'>
      {articles.map((item) => (
        <div className='relative group p-2 2xl:h-[200px] sm:h-[250px] h-[275px]' key={item.title}>
          <div className='w-full h-full bg-black absolute z-10 top-0 left-0 opacity-0 group-hover:opacity-90 transition-all duration-300' />
          <Image
            alt='Elsword World'
            blurDataURL={loader('100%', '100%')}
            className='object-cover'
            layout='fill'
            placeholder='blur'
            src={item.img}
          />
          <div className={clsx(
            'mx-auto flex items-center justify-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[-30%] opacity-0 ',
            'group-hover:translate-y-[-55%] group-hover:opacity-100 z-10 transition-all duration-300',
          )}
          >
            <h6 className='text-lg text-white text-center whitespace-nowrap'>{item.title}</h6>
            <Link href={item.path}>
              <a className='text-sky-500 hover:underline'>
                read now
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
    <Link href='/news'>
      <a className='text-sky-500 hover:underline'>See More</a>
    </Link>
  </div>
)

export default RelatedArticles
