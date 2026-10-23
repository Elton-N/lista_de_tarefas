function ListaTarefas({ tarefas, aoAlternarConcluida, aoExcluir }) {
  return (
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
                  onChange={() => aoAlternarConcluida(tarefa.id)}
                />
                {tarefa.texto}
              </label>
              <button
                type="button"
                className="excluir"
                onClick={() => aoExcluir(tarefa.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaTarefas