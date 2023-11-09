import './style.css'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import Card from '../../components/Card'
import axios from 'axios'
import React, { useState, useEffect, ChangeEvent } from 'react';


function App() {

  const [comida, setComida] = useState<string>();
  const [comidas, setComidas] = useState([]);


/*   const mostrarResultados = {
    Array.forEach(element => {
      
    });

  } */

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
    <><section className='mainSearch'>
      <Header/>
      <div className="searchContainer">
        <h3>Buscar</h3>
        <input type="text" value={comida} onChange={handleInputChange}/>
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
    </section>
    </>
  )
}

export default App
