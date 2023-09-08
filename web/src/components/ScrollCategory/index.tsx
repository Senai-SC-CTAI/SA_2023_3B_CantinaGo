import './style.css'
import React, { useState, useEffect } from 'react';
import Content from '../../components/Data/content'
import Card from '../../components/Card/index'

function ScrollCategory(props: { category: string }) {

  const [visibleCards, setVisibleCards] = useState(4); // Inicialmente, exiba 4 Cards

    // Filter content based on the category
  const filteredContent = Content.filter(
    (item) => item.category === props.category
  );

  // Function to show more Cards
  const showMoreCards = () => {
    const newVisibleCards = visibleCards + 4;
    setVisibleCards(newVisibleCards);
  };

  // Calculate the total number of cards for this category
  const totalCards = filteredContent.length;

  return (
    <>
      <h1 className='titleCategory'>{props.category}</h1>
      <div className='scroll'>
        <div className='cardContainer'>
        {filteredContent.slice(0, visibleCards).map((content) => (
            <Card
              key={content.id}
              foto={content.foto}
              nome={content.nome}
              preco={content.preco}
              caloria={content.caloria}
              id={content.id}
            />
          ))}
        </div>
        {visibleCards < totalCards && (
          <button onClick={showMoreCards} className='verMaisButton'>
            Ver mais
          </button>
        )}
      </div>
    </>
  )
}

export default ScrollCategory
