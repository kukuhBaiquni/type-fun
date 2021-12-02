/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import Link from 'next/link'
import { ExternalLinkIcon } from '@heroicons/react/outline'

const data = [{
  date: '12 December 2020',
  content: ['Add Altera Village'],
  author: 'Super Gabon',
}, {
  date: '20 February 2021',
  content: ['New Character: Noah', 'New Class: Second Revenger', 'Silent Shadow', 'Liberator'],
  author: 'Delon Ventus',
}, {
  date: '15 April 2022',
  content: ['Update Velder Dungeon Npc list'],
  author: 'Rena Erindel',
}, {
  date: '09 November 2022',
  content: [
    'Update Velder Dungeon Npc list',
    'Create dungeon list under Sander Village with Karis Sandtilus',
    'Add gallery related to current dungeon state',
    'Delete broken image and link from dead article',
  ],
  author: 'Rena Erindel',
}]

const NewsAndUpdates = () => (
  <div className='mt-8'>
    <h3 className='text-2xl font-semibold font-titillium dark:text-sky-400 text-sky-600'>News and Updates</h3>
    <p className='my-2'>
      Information about addition/update from contributor
    </p>
    <div className='max-w-screen-lg overflow-x-auto'>
      <table className='border-collapse'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Content</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>
                <ul className='list-disc'>
                  {item.content.map((val) => <li className='ml-4' key={val}>{val}</li>)}
                </ul>
              </td>
              <td>
                <Link href='/contributor/id'>
                  <a className='font-titillium text-base hover:underline text-sky-500 flex items-center py-1 px-2 transition-all duration-300'>
                    <span className='mx-1'>{item.author}</span>
                    <ExternalLinkIcon className='w-4 h-4' />
                  </a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Table columns={columns} data={data} /> */}
    </div>
  </div>
)

export default NewsAndUpdates
