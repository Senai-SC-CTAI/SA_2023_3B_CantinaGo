import './style.css'
import { useState } from 'react';
import Header from '../../components/Header/index'
import { Link } from "react-router-dom"
import axios from "axios";
import Footer from '../../components/Footer/index'

import FoodsImage from '../../assets/img/ImageHeader.png'
import Image1 from '../../assets/img/Image1Administração.svg'
import Image2 from '../../assets/img/Image2Administracao.svg'

interface Comida {
  nome: string,
  caloria: number,
  preco: number,
  categoria: string,
  ingredientes: string,
}

export default function Manage() {
  scrollTo(0,0)
  const [comida, setComida] = useState<Comida[]>([])
  const [isAdmin, setisAdmin] = useState<boolean>(true)

  const fetchComida = async () => {
    try {
      const response = await axios.get<Comida[]>('http://localhost:8090/comidas');
      setComida(response.data);
    } catch (error) {
      console.log('error', error);

    }
  };

  const handleViewComida = () => {
    fetchComida();
  };

  // if (!isAdmin) {
  //   window.location.href="./login";
  // }
  // else {

    return (
      <>
        <Header />
        <main className='mainGerenciamento'>
          <header className='headerGerenciamento'>
            <section className='headerContentGerenciamento'>
              <h1>Administração</h1>
            </section>
            <img src={FoodsImage} className='foodImageHomeGerenciamento' />
          </header>

          <article className='contentGerenc'>
            <section>
              <h2>Gerenciamento</h2>
              <p>Crie, edite ou delete cardápios e alimentos de forma eficiente, prática e fácil!</p>
              <div className='buttonsGerec'>
              
                <Link to='/edit-food'>
                  <button>Alimentos</button>
                </Link>
                <Link to='/edit-menu'>
                  <button>Cardápios</button>
                </Link>
              </div>

              {isAdmin &&(
                <>
                  <Link to='/edit-food'>
                  <button className='funcionarioBtn'>Funcionários</button>
                </Link>
                </>)}

            </section>
            <img src={Image1} className='ImageGerenc' />
          </article>
          <article className='contentGerenc'>
            <section>
              <h2>Estatísticas</h2>
              <p>Veja rapidamente dados e estatísticas sobre a sua cantina com apenas um clique!</p>
              <div className='buttonsGerec'>
                <Link to='/analytics'>
                  <button>Visualizar</button>
                </Link>
              </div>
              <div>
              </div>
            </section>
            <img src={Image2} className='ImageGerenc' />
          </article>
          <Footer />
        </main>
      </>
    )
  }


