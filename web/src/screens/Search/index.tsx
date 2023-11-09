import './style.css';
import Header from '../../components/Header/index';
import axios from 'axios';
import React, { useState, useEffect, ChangeEvent } from 'react';
import Card from '../../components/Card';

interface Comida {
  id: number;
  nome: string;
  foto: string;
  preco: number;
}

function App() {
  const [comida, setComida] = useState<string>('');
  const [comidas, setComidas] = useState<Comida[]>([]);

  const renderComidas = () => {
    return comidas.map((comida) => (
      <div key={comida.id} className="comidaContainer">
        <img src={comida.foto} alt={comida.nome} />
        <div className="div">
        <h4>{comida.nome}</h4>
        <p>Preço: R${comida.preco.toFixed(2)}</p>
        </div>
      </div>
    ));
  };

  const fetchComidas = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8090/comidas/${comida}`);
      setComidas(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setComida(enteredName);
    fetchComidas();
  };

  return (
    <section className='mainSearch'>
      <Header />
      <div className="searchContainer">
        <h3>Buscar</h3>
        <input type="text" value={comida} onChange={handleInputChange} />
      </div>
     
          <div className="pesquisaComida">
            {renderComidas()}
          </div>
          <h1>Salgados</h1>
      <div className="typeContainer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
      </div>
      <h1>Doces</h1>
      <div className="typeContainer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <h1>Bebidas</h1>
      <div className="typeContainer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <h1>Snacks</h1>
      <div className="typeContainer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
    
      
      {/* Renderizar dinamicamente as categorias */}
  
    </section>
  );
}

export default App;

export default App
