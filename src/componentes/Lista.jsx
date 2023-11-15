//primeiro exemplo
/* 
export default function Listas(){
    const minhalista = [
        <h1 key='0'>Minha Lista</h1>,
       <h4 key='1'>Item 1</h4>,
       <h4 key='2'>Item 2</h4>,
       <h4 key='3'>Item 3</h4>,
       <h4 key='4'>Item 4</h4>,
       <h4 key='5'>Item 5</h4>,
       <h4 key='6'>Item 6</h4>,
       <h4 key='7'>Item 7</h4>,
    ]
    return[minhalista]
} */

import { useEffect, useState } from "react"

/* const minhaLista = [
    { id: '0', value: 'Minha Lista' },
    { id: '1', value: 'Fruta' },
    { id: '2', value: 'Legume' },
    { id: '3', value: 'Carne' },
    { id: '4', value: 'Bebidas' },
    { id: '5', value: 'Temperos' },
    { id: '6', value: 'Higiene' },
]

export default function MinhaLista() {
    return minhaLista.map((item) => {
        return (
            <h4 key={item}>Linha lista</h4>,
            <div key={item.id}>
                
                
                <h4>{item.value}</h4>
            </div>
        )
    })
} */

const minhaLista = [
    { id: '0', value: 'Minha Lista' },
    { id: '1', value: 'Fruta' },
    { id: '2', value: 'Legume' },
    { id: '3', value: 'Carne' },
    { id: '4', value: 'Bebidas' },
    { id: '5', value: 'Temperos' },
    { id: '6', value: 'Higiene' },
]

export default function MinhaLista() {
    
    const [produtos, setProdutos] = useState(minhaLista)
    const [pesquisa, setPesquisa] = useState('')

    useEffect( () => {
        if (pesquisa){
        const novaLista = minhaLista.filter((item) => {
            return item.value.toLowerCase().includes(pesquisa.toLocaleLowerCase())
        })
        setProdutos(novaLista)
     }else{
        setProdutos(minhaLista)
     }}
     , [pesquisa]
    )

    return (
        <div>
            <h1>Efeitos Colaterais</h1>

            <input 
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            type="text" placeholder="Pesquise aqui" />
            
            {
                produtos.map((item) =>{
                    return (
                        <div key={item.id}>
                            <h4>{item.value}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}   