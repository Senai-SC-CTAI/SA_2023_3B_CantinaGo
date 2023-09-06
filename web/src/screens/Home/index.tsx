import React, { useState } from 'react';
import './style.css'
import '../../components/StyleTemplate/style.css'

import Header from '../../components/Header/index'
import Card from '../../components/Card/index'
import Footer from '../../components/Footer/index'

import Content from '../../components/Data/content'
import {Link} from "react-router-dom"

import Calendar from '../../assets/icons/Calendario.svg'
import FoodsImage from '../../assets/img/ImageHeader.png'

const salgadosContent = Content.filter(item => item.category === 'Salgados');
const docesContent = Content.filter(item => item.category === 'Doces');
const bebidasContent = Content.filter(item => item.category === 'Bebidas');
const snacksContent = Content.filter(item => item.category === 'Snacks');
 
function App() {

  const [visibleCards, setVisibleCards] = useState(4); // Inicialmente, exiba 4 Cards

  // Função para mostrar mais Cards
  const showMoreCards = () => {
    setVisibleCards(visibleCards + 4); // Exibe mais 4 Cards
  };

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

      <main className='main'>
      <article className='scrollCards'>
  <h1 className='titleCategory'>Salgados</h1>
  <div className='scroll'>
    <div className='cardContainer'>
      {salgadosContent.slice(0, visibleCards).map((content) => (
        <Card
          key={content.id}
          foto={content.foto}
          nome={content.nome}
          preco={content.preco}
          caloria={content.caloria}
          id={content.id}
        />
      ))}
    </div>
    {visibleCards < salgadosContent.length && (
      <button onClick={showMoreCards} className='verMaisButton'>Ver mais</button>
    )}
  </div>
</article>

<article className='scrollCards'>
  <h1 className='titleCategory'>Doces</h1>
  <div className='scroll'>
    <div className='cardContainer'>
      {docesContent.slice(0, visibleCards).map((content) => (
        <Card
          key={content.id}
          foto={content.foto}
          nome={content.nome}
          preco={content.preco}
          caloria={content.caloria}
          id={content.id}
        />
      ))}
    </div>
    {visibleCards < docesContent.length && (
      <button onClick={showMoreCards} className='verMaisButton'>Ver mais</button>
    )}
  </div>
</article>

<article className='scrollCards'>
  <h1 className='titleCategory'>Bebidas</h1>
  <div className='scroll'>
    <div className='cardContainer'>
      {bebidasContent.slice(0, visibleCards).map((content) => (
        <Card
          key={content.id}
          foto={content.foto}
          nome={content.nome}
          preco={content.preco}
          caloria={content.caloria}
          id={content.id}
        />
      ))}
    </div>
    {visibleCards < bebidasContent.length && (
      <button onClick={showMoreCards} className='verMaisButton'>Ver mais</button>
    )}
  </div>
</article>

<article className='scrollCards'>
  <h1 className='titleCategory'>Snacks</h1>
  <div className='scroll'>
    <div className='cardContainer'>
      {snacksContent.slice(0, visibleCards).map((content) => (
        <Card
          key={content.id}
          foto={content.foto}
          nome={content.nome}
          preco={content.preco}
          caloria={content.caloria}
          id={content.id}
        />
      ))}
    </div>
    {visibleCards < snacksContent.length && (
      <button onClick={showMoreCards} className='verMaisButton'>Ver mais</button>
    )}
  </div>
</article>
      </main>

      <Footer />
    </>
  )
}

export default App
