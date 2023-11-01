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
              <p className='buttonGerenciamento'>
<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.7909 90H76.5818C80.0182 90 82.8409 87.3409 83.25 83.9864L90 16.5682H69.5455V0H61.4864V16.5682H41.1545L42.3818 26.1409C49.3773 28.0636 55.9227 31.5409 59.85 35.3864C65.7409 41.1955 69.7909 47.2091 69.7909 57.0273V90ZM0 85.9091V81.8182H61.4864V85.9091C61.4864 88.1182 59.6455 90 57.2727 90H4.09091C1.84091 90 0 88.1182 0 85.9091ZM61.4864 57.2727C61.4864 24.5455 0 24.5455 0 57.2727H61.4864ZM0 65.4545H61.3636V73.6364H0V65.4545Z" fill="#F1F1F1"/>
</svg>
Cadastrar comida v</p>
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
