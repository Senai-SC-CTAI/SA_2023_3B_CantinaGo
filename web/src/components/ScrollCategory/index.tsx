import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/index';
import './style.css'


function ScrollCategory(props: { categoria: string }) {
  const [visibleCards, setVisibleCards] = useState(4);
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8090/comidas?categoria=' + props.categoria);
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.categoria]);

  const showMoreCards = () => {
    const newVisibleCards = visibleCards + 4;
    setVisibleCards(newVisibleCards);
  };

  const filteredContent = content.filter((item) => item.categoria === props.categoria);
  const totalCards = filteredContent.length;

  return (
    <>
      <h1  className='titleCategory'>{props.categoria}</h1>
      <div className="scroll">
        <div className="cardContainer">
          {filteredContent.slice(0, visibleCards).map((content) => (
            <Link to={`/Food/${content.id}`} key={content.id}>
              <Card
                key={content.id}
                foto={content.foto}
                nome={content.nome}
                preco={content.preco}
                caloria={content.calorias}
                id={content.id}
                categoria={content.categoria}
              />
            </Link>
          ))}
        </div>
        {visibleCards < totalCards && (
          <button onClick={showMoreCards} className="verMaisButton">
            Ver mais
          </button>
        )}
      </div>
    </>
  );
}

export default ScrollCategory;