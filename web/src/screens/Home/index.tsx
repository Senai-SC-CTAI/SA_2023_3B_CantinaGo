import './style.css'
import '../../components/StyleTemplate/style.css'
import Header from '../../components/Header/index'

import Calendar from '../../assets/icons/Calendario.svg'
import FoodsImage from '../../assets/img/ImageHeader.png'
 
function App() {

  return (
    <>
      <Header />
      <article className='welcome'>
        <section className='welcomeContent'>
          <div className='welcomeText'>
            <h1>Bom dia!</h1>
            <h2>Quarta-Feira,</h2>
            <h3>2 de Agosto</h3>
            <p>Por favor, escolha o dia 
              que deseja para visualizar
              o cardápio de sua preferência.</p>
          </div>
          <div className='welcomeCalendar'>
            <img src={Calendar} className='calendarImage'/>
            <input type="date" className="dateInput" name="dateInput" id="dateInput" />
          </div>
        </section>
        <img src={FoodsImage} className='foodImage'/>
      </article>
    </>
  )
}

export default App
