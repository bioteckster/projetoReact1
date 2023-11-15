import { useEffect, useState } from 'react';
// useEffect(() => {}, [])




export default function Colatera() {

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {

    async function buscarDados() {
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos');
      const resultadoFinal = await resultado.json();
      return resultadoFinal

    }

    buscarDados().then(res => setTarefas(res))

  }, [])

  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <div key={tarefa.id}>
              <li key={tarefa.id}>
                {tarefa.title}</li>
              {tarefa.completed ? <span>Tarefa completa</span> : null}
            </div>
          )
        })}
      </ol>
    </div>
  )
}