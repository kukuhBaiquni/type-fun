import { ReactElement } from 'react'
import Layout from 'components/layouts/default-layout'
import InputText from 'components/forms/input-text'
import { useForm } from 'react-hook-form'

const Create = () => {
  const { register } = useForm()
  return (
    <div>
      <InputText
        label='Name'
        name='name'
        placeholder='Name'
        register={register}
      />
    </div>
  )
}

Create.getLayout = (page: ReactElement) => (
  <Layout>
    {page}
  </Layout>
)

export default Create
