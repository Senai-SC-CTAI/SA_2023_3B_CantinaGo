import './style.css'

//Importação do DOM
import { useParams } from "react-router-dom";

import Header from '../../components/Header'
import content from '../../components/Data/content' 
import axios from 'axios';
import { useState } from 'react';

function Food() {
  const { id } = useParams();
    const [comidas, setComidas] = useState([]);
    const [nome, setNome] = useState('');
    const [calorias, setCalorias] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [ingredientes, setIngredientes] = useState('');

  {/*Aplicação dos conteudos com seus conformes ID's*/}
  // const selectedContent = content.find(content => content.id === parseInt(id!, 10));
  // if (!selectedContent) {
  //    return <div>No content found for the provided id.</div>;
  // }

  const selectedContent = async () => {
    try {
      const response = await axios.get('http://localhost:8090/comidas')
      setComidas(response.data);
      console.log(comidas);
      
    } catch (error) {
      console.error('Erro ao buscar veículos:', error);
    }
  };

  return (
    <>
      <Header/>
      <main className='mainFood' key={id}>
        <article className='contentFood'>
          <h1 className='nameFood'>{nome}</h1>
          <div className='alinhamentoFood'>
            <section className='ingredientesFood'>
              <p className='ingredientesTitleFood'>Ingredientes</p>
              <p className='ingredientesTextFood'>{comidas.ingredientes}</p>
            </section>
            <section className='infoFood'>
              <p>R$ {preco}</p>
              <p>{calorias} Kcal</p>
            </section>
            <button>Comprar</button>

          </div>
        </article>
        <img className='imageFood' src={selectedContent.foto}/>
      
        
      </main>

    </>
  )
}

export default Food
