import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import helloworld from './graphql/helloworld.graphql'

const AdminCombo: FC = () => {
   const { data } = useQuery(helloworld)

  return (
    <Layout>
      <PageBlock title="Titulo" subtitle="Alguma explicação." variation="full">
        <h1>Hello, World!</h1>
       <p>{data?.helloworld}</p>
      </PageBlock>
    </Layout>
  )
}
    
export default AdminCombo