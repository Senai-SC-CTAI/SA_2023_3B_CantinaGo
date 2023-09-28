import './style.css'
import Header from '../../../components/Header/index'
import {Link} from "react-router-dom"


function App() {

  return (
    <>
      <Header />

      <main className='mainGerenciamento'>
        <section>
          <article className='graphic1Gerenciamento'>

          </article>
          <div className='buttonsGerenciamento'>
            <Link to='/ListaComidas'>
              <p className='buttonGerenciamento'>Comidas</p>
            </Link>
            <Link to='/EditarCardapio'>
              <p className='buttonGerenciamento'>Editar Cardápio</p>
            </Link>
          </div>
        </section>

        <section>
          <article className='graphic2Gerenciamento'>

          </article>
          <article className='graphic3Gerenciamento'>

          </article>
        </section>
      </main>
    </>
  )
}

export default App
