import './App.css';
import perfil from './assets/perfil.jpg'

export default function App() {
  return (
    <div className="container">
      <header>
        <h2>LUCAS.dev</h2>
        <ul className="menu">
          <li>Produtos</li>
          <li>Sobre Nós</li>
          <li>Contatos</li>
        </ul>
      </header>
      <section>
        <div className="left">
          <img src={perfil} alt="perfil" />
          <strong>Lucas Carvalho</strong>
          <span> Eu sou Lucas Carvalho, estudante do curso de programação zero da Cubos Academy</span>
        </div>
        <div className="right">
          <strong>27 de Julho de 2022</strong>
          <h2>Intro ao REACT</h2>
          <span>Professor Dani Lopes</span>
          <a href="#">Saiba Mais</a>
        </div>
      </section>
      <footer>
        <ul className="menu">
          <li>Amigos</li>
          <li>Redes</li>
        </ul>
      </footer>
    </div>
  )
}
