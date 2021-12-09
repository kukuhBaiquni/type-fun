import { ReactElement } from 'react'
import Layout from 'components/layouts/default-layout'

const Create = () => (
  <div>Character Information</div>
)

Create.getLayout = (page: ReactElement) => (
  <Layout>
    {page}
  </Layout>
)

export default Create
