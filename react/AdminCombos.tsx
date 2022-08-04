import React, { FC, useEffect, useState, } from 'react'
import { Layout, PageBlock, Table } from 'vtex.styleguide'
import axios from 'axios'

// interface User {
//     name: String
//     email: String
//     prospectDate: String
//     phone: String
//     situation: String
//     clientDate: String
// }

interface Combo {
    quantidade: number
    itens: string[]
    id: string
    comboProdutoId: string
    productOneId: number
    productOneName: string
    productTwoId: number
    productTwoName: string
}

// interface Response{
//     data:Combo[]
// }

const defaultSchema = {
    properties: {
        "prodOneId": {
            title: "Produto 1 Id",
            width: 100,
        },
        "prodOneName": {
            title: "Produto 1 Nome",
            width: 250
        },
        "prodTwoId": {
            title: "Produto 2 Id",
            width: 100
        },
        "prodTwoName": {
            title: "Produto 2 Nome",
            width: 250
        },
        "quantidade": {
            title: "Quantidade",
            width: 100
        }
    },
}

const AdminCombo: FC = () => {

    const [loading, setLoading] = useState(true);
    const [combos, setCombos] = useState<Combo[]>([]);
    // const [sortedBy, setSortedtBy] = useState<String>("name");
    // const [sortedOrder, setSortedOrder] = useState<String>("ASC");

    // const getData = async () => {
    //     const response = await axios.get('http://ec2-15-229-66-74.sa-east-1.compute.amazonaws.com:3000/combos') as Combo[]
    //     console.log(response)
    //     setLoading(false)
    //     return response
    // }

    useEffect(() => {
        const getData = async () => {
            try {
                // const { data } = await axios.get('https://d6v3yemkcmgnnjhluk5ouoqloa0wwucm.lambda-url.us-east-1.on.aws/')
                const { data } = await axios.get('https://combos-api.herokuapp.com/combos')
                setCombos(data)
                console.log(data);
                setLoading(false)
            } catch (error) { alert("Deu algo errado"); }
        };
        getData();
    }, []);

    // function handleSort() {
    //     if (sortedBy === 'name') {
    //         let novaLista =
    // //             sortedOrder === "ASC"
    // //                 ? data.sort((a,b)=> b.name.charCodeAt() - a.name.charCodeAt())
    // //                 : data.sort((a,b)=> a.name.charCodeAt() - b.name.charCodeAt())

    //         sortedOrder === "ASC"
    //                 ? data!.sort(sortNameAlphapeticallyASC)
    //                 : data!.sort(sortNameAlphapeticallyDESC)   

    //         setSortedtBy("name")
    //         sortedOrder === "ASC"?setSortedOrder("DESC"):setSortedOrder("ASC")

    //         setData(combos)
            
    //         console.log("sortedOrder", sortedOrder)
    //         console.log("sortedBy", sortedBy)
    //     }
    // }

    // function sortNameAlphapeticallyASC(user1: Combo, user2: Combo) {
    //     return user1.name < user2.name ? -1 : user1.name > user2.name ? 1 : 0
    // }
    // function sortNameAlphapeticallyDESC(user1: Combo, user2: Combo) {
    //     return user1.name < user2.name ? 1 : user1.name > user2.name ? -1 : 0


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
            <PageBlock title="Titulo" subtitle="Alguma explicação." variation="full" >
                <Table
                    schema={defaultSchema}
                    items={combos}
                    loading={loading}
                    fullWidt
                    bg-danger
                // sort={{
                //     sortedBy: sortedBy,
                //     sortedOrder: sortedOrder
                // }}
                // onSort={handleSort}
                />
            </PageBlock>
        </Layout>
    )

}
export default AdminCombo