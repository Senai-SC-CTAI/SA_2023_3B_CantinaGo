import './style.css'
import { useState } from 'react';
import Header from '../../../components/Header/index'
import {Link} from "react-router-dom"
import { FeedbackComponent } from "../Feedback"
import axios from "axios";
import Footer from '../../../components/Footer/index'

import FoodsImage from '../../../assets/img/ImageHeader.png'
import Image1 from '../../../assets/img/Image1Administração.svg'
import Image2 from '../../../assets/img/Image2Administracao.svg'

interface Comida {
  nome: string,
  caloria: number,
  preco: number,
  categoria: string,
  ingredientes: string,
}

function GerenciamentoHome() {
  const [comida, setComida] = useState<Comida[]>([])

  const fetchComida = async () => {
    try{
      const response = await axios.get<Comida[]>('http://localhost:8090/comidas');
      setComida(response.data);
    } catch (error){
      console.log('error', error);
      
    }
  };

  const handleViewComida = () => {
    fetchComida();
  }

  return (
    <>
      <Header />

      <main className='mainGerenciamento'>
        <header className='headerGerenciamento'>
          <section className='headerContentGerenciamento'>
            <h1>Administração</h1>
          </section>
          <img src={FoodsImage} className='foodImageHomeGerenciamento'/>

        </header>

        
          <article className='contentGerenc'>
            <section>
              <h2>Gerenciamento</h2>
              <p>Crie, edite ou delete cardápios e alimentos de forma eficiente, prática e fácil!</p>
              <div className='buttonsGerec'>
                <Link to='/EditarCardapio'>
                  <button>Cardápios</button>
                </Link>
                <Link to='/EditarComida'>
                  <button>Alimentos</button>
                </Link>
              </div>
            </section>
            <img src={Image1} className='ImageGerenc'/>
          </article>
          <article className='contentGerenc'>
             <section>
              <h2>Estatísticas</h2>
              <p>Veja rapidamente dados e estatísticas sobre a sua cantina com apenas um clique!</p>
              <div className='buttonsGerec'>
                <Link to='/'>
                  <button>Visualizar</button>
                </Link>
                <Link to='/'>
                  <button>Adicionar</button>
                </Link>
              </div>
              <div>
                <FeedbackComponent />
                <div>
                  <button className='btn' onClick={handleViewComida}>
                    <p className='buttonGerenciamento'>TESTEMostrar Comidas</p>
                  </button>

                  <div className='comidaContainer'>
                    {comida.map((comida, index) =>(
                      <div key={index} className='comidaItem'>
                        <p>Nome: {comida.nome}</p>
                        <p>Calorias {comida.caloria}</p>
                        <p>Preço: {comida.preco}</p>
                        <p>Categoria: {comida.categoria}</p>
                        <p>Ingredientes: {comida.ingredientes}</p>
                      </div>
                  ))}

                  </div>
                </div>
              </div>
            </section>
            <img src={Image2} className='ImageGerenc'/>
          </article>
      <Footer />
        
        {/* <section>
          <article className='graphic1Gerenciamento'>

          </article>
          <div className='buttonsGerenciamento'>
            <Link to='/ListaComidas'>
              <p className='buttonGerenciamento'>Comidas</p>
            </Link>
            <Link to='/EditarCardapio'>
              <p className='buttonGerenciamento'>Editar Cardápio</p>
            </Link>
          <FeedbackComponent />
          <div>
            <button className='btn' onClick={handleViewComida}>
              <p className='buttonGerenciamento'>Mostrar Comidas</p>
            </button>

            <div className='comidaContainer'>
              {comida.map((comida, index) =>(
                <div key={index} className='comidaItem'>
                  <p>Nome: {comida.nome}</p>
                  <p>Calorias {comida.caloria}</p>
                  <p>Preço: {comida.preco}</p>
                  <p>Categoria: {comida.categoria}</p>
                  <p>Ingredientes: {comida.ingredientes}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>

        <section>
          <article className='graphic2Gerenciamento'>
       
          </article>
          <article className='graphic3Gerenciamento'>

          </article>
        </section> */}
      </main>
    </>
  )
}

export default GerenciamentoHome
