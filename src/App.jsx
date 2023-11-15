
import Listas from "./componentes/Lista"
import MeuComponente from "./componentes/MeuComponente"
import Meucontador from "./componentes/Meucontador"
import Colatera from "./componentes/Colateral"



function App() {


  return (
    <div>

      <h1>Olá Mundo!</h1>

      <MeuComponente />

      <Botao conteudo='Botão 1' />

      <Botao conteudo='Botão 2' />

      <Botao conteudo='Botão 3' />
      <hr />

      <Meucontador />

      <Listas />

      <hr />

      <Colatera />

    
    </div>

  )
}

function Botao(props) {
  console.log(props)
  return (
    // eslint-disable-next-line react/prop-types
    <button>{props.conteudo}</button>
  )
}


export default App
