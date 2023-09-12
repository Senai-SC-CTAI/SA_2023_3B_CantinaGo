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
      
      <div key={selectedContent.id}>
        <h1>{selectedContent.nome}</h1>
        <h2>{selectedContent.category}</h2>
        <img src={selectedContent.foto}/>
        <h4>{selectedContent.caloria}</h4>
        <p>igredientes</p>
        <p>{selectedContent.ingredientes}</p>
        <h3>{selectedContent.preco}</h3>
        
      </div>

    </>
  )
}

export default Food
