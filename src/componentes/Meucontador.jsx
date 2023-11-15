import { useState } from "react"
import './style.css'

export default function Meucontador() {
const [contador, setContador] = useState(0)

    
    function aumentar(){
        setContador(contador + 1)
        console.log('o valor do contador é: ',contador)
        
    }
    function diminuir(){
        setContador(contador - 1)
        console.log('o valor do contador é: ',contador)
        
    }
    if (contador > 5){
        return(
        <div className="container">

            <h1><span>Contador maior que 5</span></h1>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>)
        }

    return (
        <div>
            <h1>Meu Contador</h1>
            
            <h3>contagem: {contador}</h3>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
            
            
        </div>
    )
}