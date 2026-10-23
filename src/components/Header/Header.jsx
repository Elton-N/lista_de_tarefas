import './Header.css'

function Header() {
  return (
    <header className="site-header" id="inicio">
      <div className="header-inner">
        <div className="header-copy">
          <span className="brand-mark" aria-hidden="true">LT</span>
          <div>
            <h1>Minha Lista de Tarefas</h1>
            <p>Organize seus estudos e anote o que precisa fazer.</p>
          </div>
        </div>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#nova-tarefa">Nova tarefa</a>
          <a href="#tarefas">Tarefas</a>
        </nav>
      </div>
    </header>
  )
}

export default Header