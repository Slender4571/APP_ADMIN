import React, { FC, useEffect, useState, } from 'react'
import { Layout, PageBlock, Table } from 'vtex.styleguide'
import axios from 'axios'

const defaultSchema = {
    properties: {
        name: {
            title: 'Name',
            width: 250,
            sortable: true,
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

const AdminCombo: FC = () => {

    let listCombos = [
        {
            name: 'Felipe',
            email: 'name2',
            prospectDate: 'name1',
            phone: 'name1',
            situation: 'name1',
            clientDate: 'name1'
        },
        {
            name: 'Leonardo',
            email: 'name4',
            prospectDate: 'name1',
            phone: 'name1',
            situation: 'name1',
            clientDate: 'name1'
        },
        {
            name: 'Wily',
            email: 'name1',
            prospectDate: 'name1',
            phone: 'name1',
            situation: 'name1',
            clientDate: 'name1'
        },
        {
            name: 'Marcel',
            email: 'name1',
            prospectDate: 'name1',
            phone: 'name1',
            situation: 'name1',
            clientDate: 'name1'
        },
        {
            name: 'Fernanda',
            email: 'name5',
            prospectDate: 'name1',
            phone: 'name1',
            situation: 'name1',
            clientDate: 'name1'
        },
        {
            name: 'Fernando',
            email: 'name1',
            prospectDate: 'name1',
            phone: 'name1',
            situation: 'name1',
            clientDate: 'name1'
        },
    ]

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<User[]>(listCombos);
    const [sortedBy, setSortedtBy] = useState<String>("name");
    const [sortedOrder, setSortedOrder] = useState<String>("ASC");

    // const getData = async () => {
    //     const response = await axios.get('http://ec2-15-229-66-74.sa-east-1.compute.amazonaws.com:3000/combos') as Combo[]
    //     console.log(response)
    //     setLoading(false)
    //     return response

    // }

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://ec2-15-229-66-74.sa-east-1.compute.amazonaws.com:3000/combos') as Combo[]
                setLoading(false)
                console.log(response)
            } catch (error) { alert("Deu algo errado"); }
        };
        getData();
    }, []);

    // useEffect(() => getData(), [])

    function handleSort() {

        if (sortedBy === 'name') {
            let novaLista =
                sortedOrder === "ASC"
                    ? data!.sort(sortNameAlphapeticallyASC)
                    : data!.sort(sortNameAlphapeticallyDESC)

            setSortedtBy("name")
            if (sortedOrder === "ASC") {
                setSortedOrder("DESC")

            } else { setSortedOrder("ASC") }

            setData(novaLista)
            console.log("data", data)
            console.log("listCombos", novaLista)
            console.log("sortedOrder", sortedOrder)
            console.log("sortedBy", sortedBy)
        }
    }

    function sortNameAlphapeticallyASC(user1: User, user2: User) {
        return user1.name < user2.name ? -1 : user1.name > user2.name ? 1 : 0
    }
    function sortNameAlphapeticallyDESC(user1: User, user2: User) {
        return user1.name < user2.name ? 1 : user1.name > user2.name ? -1 : 0
    }

    // if (data.lengh <= 0) {
    //     return (
    //         <Layout>
    //             <PageBlock title="Combos" variation="full">
    //                 <div className="error">
    //                     <h1>Algo inesperado aconteceu, tente novamente</h1>
    //                 </div>
    //             </PageBlock>
    //         </Layout>
    //     )
    // }

    return (
        <Layout>
            <PageBlock className="mb5">
                <Table
                    schema={defaultSchema}
                    items={data}
                    loading={loading}
                    fullWidt
                    // sort={{
                    //     sortedBy: sortedBy,
                    //     sortedOrder: sortedOrder
                    // }}
                    onSort={handleSort}
                />
            </PageBlock>
        </Layout>
    )

    interface User {
        name: String
        email: String
        prospectDate: String
        phone: String
        situation: String
        clientDate: String
    }

    interface Combo {
        quantidade: number
        itens: String[]
        id: String
        comboProdutoId: String
        produtos: Object[]
    }
}
export default AdminCombo