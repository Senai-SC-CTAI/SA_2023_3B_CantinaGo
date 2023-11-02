import './style.css'
import Header from '../../../components/Header/index'
import * as React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios'


//FAZER MODAL



function RegistrarComida() {
  const [comidas, setComidas] = useState([]);
  
  const [formState, setFormState] = useState({
    nomeInput: '',
    caloriasInput: '',
    precoInput: '',
    categoriaInput: '',
    ingredientesInput: '',
  });

  useEffect(() => {
    fetchComidas()
  }, [])

  const fetchComidas = async () => {
    try {
      const response = await axios.get('http://localhost:8090/comidas')
      setComidas(response.data);
    } catch (error){
      console.log('error', error);
      
    }
  };

  const handleSubmit = async () => {
    try {
      let novaComida = {
        nome: formState.nomeInput,
        calorias: formState.caloriasInput,
        preco: formState.precoInput,
        categoria: formState.categoriaInput,
        ingredientes: formState.ingredientesInput,
      };
      await axios.post('http://localhost:8090/comidas', novaComida);
      fetchComidas();

      setFormState({
        nomeInput: '',
        caloriasInput: '',
        precoInput: '',
        categoriaInput: '',
        ingredientesInput: '',
      });

    } catch (error) {
      console.log('Erro ao criar comida: ', error);
    }
  }

  // const [comidas, setComidas] = useState([]);
  // const [nomeInput, setNomeInput] = useState('');
  // const [caloriasInput, setCaloriasInput] = useState('');
  // const [precoInput, setPrecoInput] = useState('');
  // const [categoriaInput, setCategoriaInput] = useState('');
  // const [ingredientesInput, setIngredientesInput] = useState('');

  

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
      const {name, value} = event.target;
      setFormState({ ...formState, [name]: value});
    }

  return (
    <>
      <Header />

      <main className='mainRegistrarComida'>
       <h1 className='titleRegistrarComida'>Cadastro de Comida</h1>
       <div className='gridRegistrarComida'>

          <div className='titleInfoRegistrarComida'>
            <p>Nova Comida</p>
          </div>
        <section className='infosRegistrarComida'>
          <article className='inputsRegistrarComida'>
            <p>Informações</p>
            <input 
              placeholder='Nome' 
              name='nomeInput'
              value = {formState.nomeInput}
              onChange = {handleInputChange}
              ></input>
            <input
            placeholder='Calorias' 
            name='caloriasInput'
            value = {formState.caloriasInput}
            onChange = {handleInputChange}
            ></input>
            <input
              placeholder='Preço' 
              name='precoInput'
              value = {formState.precoInput}
              onChange = {handleInputChange}
            ></input>
            <input
              placeholder='Categoria' 
              name='categoriaInput'
              value = {formState.categoriaInput}
              onChange = {handleInputChange}
            ></input>
            <input
              placeholder='Ingredientes' 
              name='ingredientesInput'
              value = {formState.ingredientesInput}
              onChange = {handleInputChange}
            ></input>
          </article>
          <article className='imagemRegistrarComida'>
            <p>Imagem</p>
            <div>

            </div>
          </article>
        </section>
        <div className='botoesRegistrarComida'>
          <button onClick={handleSubmit}>Registrar Comida</button>
          <button>Resetar Informações</button>
          <button>Editar Cardapio</button>
        </div>
       </div>
      </main>
    </>
  )
}

export default RegistrarComida