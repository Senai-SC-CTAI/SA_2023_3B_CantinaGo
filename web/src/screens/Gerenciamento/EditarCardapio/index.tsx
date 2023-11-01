import './style.css'
import Header from '../../../components/Header/index'
import {Link} from "react-router-dom"
import { FeedbackComponent } from "../Feedback"

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
              <p className='buttonGerenciamento'>Registrar cardapio</p>
            </Link>
            <Link to='/EditarCardapio'>
              <p className='buttonGerenciamento'>Resetar Cardapio</p>
            </Link>
            <Link to='/EditarCardapio'>
              <p className='buttonGerenciamento'>Cadastrar comida</p>
            </Link>
          <FeedbackComponent />
          </div>
        </section>

        <section>
          
          <article className='graphic3Gerenciamento'>

          </article>
        </section>
      </main>
    </>
  )
}

export default App
