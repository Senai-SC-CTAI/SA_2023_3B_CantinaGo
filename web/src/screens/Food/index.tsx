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
     return <div className="mainFood">Comida não encontrada</div>;
  }

  return (
    <>
      <Header/>
      <main className='mainFood' key={selectedContent.id}>
        <article className='contentFood'>
          <h1 className='nameFood'>{selectedContent.nome}</h1>
          <div className='alinhamentoFood'>
            <section className='ingredientesFood'>
              <p className='ingredientesTitleFood'>Ingredientes</p>
              <p className='ingredientesTextFood'>{selectedContent.ingredientes}</p>
            </section>
            <section className='infoFood'>
              <p>R$ {selectedContent.preco}</p>
              <p>{selectedContent.caloria} Kcal</p>
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
