import './style.css'
import { useState, useEffect } from 'react';
//Importação do DOM
import { useParams } from "react-router-dom";

import Header from '../../components/Header'

function Food() {
  const { id } = useParams();
  const [selectedContent, setSelectedContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8090/comidas');
        const data = await response.json();
        
        // Filtra o conteúdo com base no ID
        const selectedData = data.filter(item => item.id === parseInt(id, 10));

        if (selectedData.length > 0) {
          setSelectedContent(selectedData[0]);
        } else {
          console.log('Comida não encontrada');
        }
      } catch (error) {
        console.error('Erro ao buscar as categorias:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    console.log("id", id);
    console.log("comida", selectedContent);
  }, [id, selectedContent]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!selectedContent) {
    return <div className="mainFood">Comida não encontrada</div>;
  }

  const { nome, ingredientes, preco, calorias, foto } = selectedContent;

  return (
    <>
      <Header />
      <main className="mainFood" key={id}>
        <article className="contentFood">
          <h1 className="nameFood">{nome}</h1>
          <div className="alinhamentoFood">
            <section className="ingredientesFood">
              <p className="ingredientesTitleFood">Ingredientes</p>
              <p className="ingredientesTextFood">{ingredientes}</p>
            </section>
            <section className="infoFood">
              <p>R$ {preco}</p>
              <p>{calorias} Kcal</p>
            </section>
            <button>Comprar</button>
          </div>
        </article>
        <img className="imageFood" src={foto} alt={nome} />
      </main>
    </>
  );
}

export default Food;