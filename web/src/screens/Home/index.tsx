import './style.css'
import Header from '../../components/Header/index'

import Calendar from '../../assets/icons/Calendario.svg'
import FoodsImage from '../../assets/img/ImageHeader.png'
 
function App() {

  return (
    <>
      <Header />
      <article className='welcome'>
        <section className='welcomeText'>
          <div>
            <h1>Bom dia!</h1>
            <h2>Quarta Feira,</h2>
            <h3>2 de Agosto</h3>
            <p>Por favor, escolha o dia 
              que deseja para visualizar
              o cardápio de sua preferência.</p>
          </div>
          <div>
            <img src={Calendar}/>
            <input type="date" className="dateInput" name="dateInput" id="dateInput" />
          </div>
        </section>
        <section>
          <img src={FoodsImage} className='foodImage'/>
        </section>
      </article>
    </>
  )
}

export default App
