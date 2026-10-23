import './Main.css'

function Main({
  texto,
  tarefas,
  aoAlterarTexto,
  aoAdicionar,
  aoAlternarConcluida,
  aoExcluir,
}) {
  return (
    <main className="main-content">
      <section className="task-entry" id="nova-tarefa" aria-labelledby="entry-title">
        <h2 id="entry-title">Nova tarefa</h2>
        <form className="task-form" onSubmit={aoAdicionar}>
          <label htmlFor="nova-tarefa-input">O que você precisa fazer?</label>
          <div className="task-input-row">
            <input
              id="nova-tarefa-input"
              type="text"
              value={texto}
              onChange={aoAlterarTexto}
              placeholder="Ex.: Estudar matemática"
            />
            <button className="add-button" type="submit">Adicionar</button>
          </div>
        </form>
      </section>

      <section className="task-list" id="tarefas" aria-labelledby="tasks-title" aria-live="polite">
        <h2 id="tasks-title">Tarefas</h2>

        {tarefas.length === 0 ? (
          <p className="empty-state">Nenhuma tarefa ainda. Adicione a primeira acima.</p>
        ) : (
          <ul>
            {tarefas.map((tarefa) => (
              <li key={tarefa.id} className="task-item">
                <label className={tarefa.concluida ? 'task-label completed' : 'task-label'}>
                  <input
                    type="checkbox"
                    checked={tarefa.concluida}
                    onChange={() => aoAlternarConcluida(tarefa.id)}
                  />
                  <span>{tarefa.texto}</span>
                </label>
                <button
                  type="button"
                  className="delete-button"
                  aria-label={`Excluir tarefa: ${tarefa.texto}`}
                  onClick={() => aoExcluir(tarefa.id)}
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

export default Main