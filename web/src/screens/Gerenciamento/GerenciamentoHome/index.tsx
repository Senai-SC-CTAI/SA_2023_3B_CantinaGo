import './style.css'
import { useState } from 'react';
import Header from '../../../components/Header/index'
import {Link} from "react-router-dom"
import { FeedbackComponent } from "../Feedback"
import axios from "axios";

interface Comida {
  nome: string,
  caloria: number,
  preco: number,
  categoria: string,
  ingredientes: string,
}

export const GerencamentoHome = () => {
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
        </section>
      </main>
    </>
  )
}
