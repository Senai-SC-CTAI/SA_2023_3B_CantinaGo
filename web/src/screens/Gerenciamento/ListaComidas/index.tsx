import './style.css'
import Header from '../../../components/Header/index'
import {Link} from "react-router-dom"


function App() {

  return (
    <>
      <Header />

      <main className='mainListaComidas'>
        <h1>Comidas</h1>
        <section className='buttonsListaComida'>
          <Link to='/RegistrarComida'>
            <p className='buttonListaComida'>Adicionar Comida</p>
          </Link>
          <Link to='/EditarCardapio'>
            <p className='buttonListaComida'>Editar Cardapio</p>
          </Link>
        </section>

        <section className='listasListaComida'>
          <article className='listaListaComida'>

          </article>
          <article className='listaListaComida'>

          </article>
          <article className='listaListaComida'>

          </article>
          <article className='listaListaComida'>

          </article>
          <article className='adicionarListaComida'>

          </article>
        </section>  
      </main>
    </>
  )
}

export default App
