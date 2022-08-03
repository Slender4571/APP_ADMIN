import React, { FC, useEffect, useState } from 'react'
import { Layout, PageBlock, Table } from 'vtex.styleguide'
// import axios from 'axios'

const defaultSchema = {
  properties: {
    name: {
      title: 'ID',
      width: 250,
    },
    email: {
      title: 'Email',
      minWidth: 250,
    },
    phone: {
      title: 'Telefone',
      minWidth: 100,
    },
    situation: {
      title: 'Situação',
      minWidth: 100,
    },
    prospectDate: {
      title: 'Prospecto desde',
      minWidth: 200,
    },
    clientDate: {
      title: 'Cliente desde',
      minWidth: 200,
    },
  },
}
const listCombos = [
  {
    name: 'name1',
    email: 'name1',
    prospectDate: 'name1',
    phone: 'name1',
    situation: 'name1',
    clientDate: 'name1'
  },
  {
    name: 'name1',
    email: 'name1',
    prospectDate: 'name1',
    phone: 'name1',
    situation: 'name1',
    clientDate: 'name1'
  },
  {
    name: 'name1',
    email: 'name1',
    prospectDate: 'name1',
    phone: 'name1',
    situation: 'name1',
    clientDate: 'name1'
  },
  {
    name: 'name1',
    email: 'name1',
    prospectDate: 'name1',
    phone: 'name1',
    situation: 'name1',
    clientDate: 'name1'
  },
  {
    name: 'name1',
    email: 'name1',
    prospectDate: 'name1',
    phone: 'name1',
    situation: 'name1',
    clientDate: 'name1'
  },
  {
    name: 'name1',
    email: 'name1',
    prospectDate: 'name1',
    phone: 'name1',
    situation: 'name1',
    clientDate: 'name1'
  }
]

const AdminCombo: FC = () => {

  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const getData = (() => {
    // const response:any = await axios.get(' https://combos-api.herokuapp.com/combos ');
    setData(listCombos)
    setLoading(false)
  })

  useEffect(() => getData(), [])

  // if (error) {
  //   return (
  //     <Layout>
  //       <PageBlock title="Combos" variation="full">
  //         <div className="error">
  //           <h1>Algo inesperado aconteceu, tente novamente</h1>
  //         </div>
  //       </PageBlock>
  //     </Layout>
  //   )
  // }

  return (
    <Layout>
      <PageBlock title="Combos" subtitle="LISTA DE COMBOS" variation="full">
        <Table
          loading={loading}
          fullWidth
          schema={defaultSchema}
          items={data}
          density="high"
        />
      </PageBlock>
    </Layout>
  )

}

export default AdminCombo