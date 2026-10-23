import { useState } from 'react'
import './App.css'

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
    <main className="app">
      <h1>Minha Lista de Tarefas</h1>
      <p className="subtitulo">Organize seus estudos e anote o que precisa fazer.</p>

      <form className="formulario" onSubmit={adicionarTarefa}>
        <label htmlFor="nova-tarefa">Nova tarefa</label>
        <div className="campo">
          <input
            id="nova-tarefa"
            type="text"
            value={texto}
            onChange={(evento) => setTexto(evento.target.value)}
            placeholder="Ex.: Estudar matemática"
          />
          <button type="submit">Adicionar</button>
        </div>
      </form>

      <section className="lista" aria-live="polite">
        <h2>Tarefas</h2>

        {tarefas.length === 0 ? (
          <p className="lista-vazia">Nenhuma tarefa ainda. Adicione a primeira acima.</p>
        ) : (
          <ul>
            {tarefas.map((tarefa) => (
              <li key={tarefa.id} className="item">
                <label className={tarefa.concluida ? 'texto concluida' : 'texto'}>
                  <input
                    type="checkbox"
                    checked={tarefa.concluida}
                    onChange={() => alternarConcluida(tarefa.id)}
                  />
                  {tarefa.texto}
                </label>
                <button
                  type="button"
                  className="excluir"
                  onClick={() => excluirTarefa(tarefa.id)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
