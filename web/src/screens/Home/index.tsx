import './style.css'
import '../../components/StyleTemplate/style.css'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import ScrollCategory  from '../../components/ScrollCategory';
import Content from '../../components/Data/content'
import Calendar from '../../assets/icons/Calendario.svg'
import FoodsImage from '../../assets/img/ImageHeader.png'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import coxinha from '../../assets/img/Coxinha.png'
import pastel from '../../assets/img/Pastel.png'
import barrinha from '../../assets/img/SnackHitter.png'
import docinho from '../../assets/img/Beijinho.png'
import salgadinho from '../../assets/img/salgadinho.png'
import bolomorango from '../../assets/img/bolomorango.png'
import crossaint from '../../assets/img/Crossaint.png'
import mandioca from '../../assets/img/SnackMandioca.png'
import cha from '../../assets/img/Cha.png'
import agua from '../../assets/img/Agua.png'



const uniqueCategories = Array.from(new Set(Content.map((item) => item.categoria)));

export const localImages: string[] = [coxinha, pastel, barrinha, docinho, salgadinho, bolomorango, crossaint, mandioca, cha, agua];



function App() {
  scrollTo(0,0)
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8090/comidas');
        const data = await response.json();
        const uniqueCategories = Array.from(new Set(data.map((item: any) => item.categoria)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
        <img src={FoodsImage} className='foodImageHome' alt="Food" />
              </article>

      <main className="mainHome">
        <article className="scrollCardsHome">
          {categories.map((categoria) => (
            <ScrollCategory key={categoria} categoria={categoria} />
          ))}
        </article>
      </main>

      <Footer />
    </>
  )
}

export default App
