import './style.css'

//Importação do DOM
import { useParams } from "react-router-dom";

import Header from '../../components/Header'
import content from '../../components/Data/content' 

function Food() {
  const { id } = useParams();

  {/*Aplicação dos conteudos com seus conformes ID's*/}
  const selectedContent = content.find(content => content.id === parseInt(id!, 10));
  if (!selectedContent) {
     return <div>No content found for the provided id.</div>;
  }

  return (
    <>
      <Header/>
      <main key={selectedContent.id}>
        <article className='content'>
          <h1 className='name'>{selectedContent.nome}</h1>
          <section className='ingredientes'>
            <p className='ingredientesTitle'>ingredientes</p>
            <p className='ingredientesText'>{selectedContent.ingredientes}</p>
          </section>
          <section>
            <p>{selectedContent.preco}</p>
            <p>{selectedContent.caloria}</p>
          </section>
          <button>Comprar</button>
        </article>
        <img src={selectedContent.foto}/>
      
        
      </main>

    </>
  )
}

export default Food
