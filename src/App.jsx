import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  const [texto, setTexto] = useState('')
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(evento) {
    evento.preventDefault()

    const textoLimpo = texto.trim()

    if (textoLimpo === '') {
      return
    }

    const novaTarefa = {
      id: Date.now(),
      texto: textoLimpo,
      concluida: false,
    }

    setTarefas([...tarefas, novaTarefa])
    setTexto('')
  }

  function alternarConcluida(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa,
      ),
    )
  }

  function excluirTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return (
    <>
      <Header />
      <Main
        texto={texto}
        tarefas={tarefas}
        aoAlterarTexto={(evento) => setTexto(evento.target.value)}
        aoAdicionar={adicionarTarefa}
        aoAlternarConcluida={alternarConcluida}
        aoExcluir={excluirTarefa}
      />
      <Footer />
    </>
  )
}

export default App
