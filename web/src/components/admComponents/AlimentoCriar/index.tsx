import React from "react";
import "./style.css";
import Ok from "../../../assets/icons/Ok.svg";
import Reset from "../../../assets/icons/Reset.svg"
import Back from "../../../assets/icons/Back.svg"
import { useState, useEffect } from "react";
import axios from "axios";
import ImageInput from "../../imageInput";

import {localImages} from '../../../screens/Home/index';

//FAZER MODAL

const AlimentoCriar: React.FC<{ onVoltarClick: () => void }> = ({ onVoltarClick }) => {
  const [comidas, setComidas] = useState([]);

  const [formState, setFormState] = useState({
    nomeInput: "",
    caloriasInput: "",
    precoInput: "",
    categoriaInput: "",
    ingredientesInput: "",
  });

  useEffect(() => {
    fetchComidas();
  }, []);

  const fetchComidas = async () => {
    try {
      const response = await axios.get("http://localhost:8090/comidas");
      setComidas(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const index: number = comidas.length % localImages.length;
      let novaComida = {
        nome: formState.nomeInput,
        calorias: formState.caloriasInput,
        preco: formState.precoInput,
        categoria: formState.categoriaInput,
        ingredientes: formState.ingredientesInput,
        foto: localImages[index],
      };
      await axios.post("http://localhost:8090/comidas", novaComida);
      fetchComidas();

      setFormState({
        nomeInput: "",
        caloriasInput: "",
        precoInput: "",
        categoriaInput: "",
        ingredientesInput: "",
      });
    } catch (error) {
      console.log("Erro ao criar comida: ", error);
    }
  };

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormState(
      //limpar 
      { ...formState, [name]: value }
      );
  };

  const handleReset = () => {
    setFormState({
      nomeInput: "",
      caloriasInput: "",
      precoInput: "",
      categoriaInput: "",
      ingredientesInput: "",
      
    });
  };

  return (
    <main className="AlimentoCriarMain">
      <section className="section1AlimentoCriar">
        <h4>Novo Alimento</h4>
        <div className="accordionCriar">
          {/* <form onSubmit={handleSubmit}> */}

          <input
            placeholder="Nome"
            type="text"
            name="nomeInput"
            value={formState.nomeInput}
            onChange={handleInputChange}
            ></input>
          <input
            placeholder="Calorias"
            name="caloriasInput"
            type="number"
            value={formState.caloriasInput}
            onChange={handleInputChange}
            ></input>
          <input
            placeholder="Preço"
            type="number"
            name="precoInput"
            value={formState.precoInput}
            onChange={handleInputChange}
            ></input>
          <input
            placeholder="Categoria"
            type="text"
            name="categoriaInput"
            value={formState.categoriaInput}
            onChange={handleInputChange}
            ></input>
          <input
            placeholder="Ingredientes"
            type="text"
            name="ingredientesInput"
            value={formState.ingredientesInput}
            onChange={handleInputChange}
            ></input>
          <ImageInput/>
            {/* </form> */}
        </div>
      </section>
      <section className="section2AlimentoCriar">
        <button onClick={handleSubmit} type="submit">
          <div className="iconButton">
            <img src={Ok} alt="" />
          </div>
          <span>Confirmar</span>
        </button>
        <button onClick={handleReset}>
          <div className="iconButton">
            <img src={Reset} alt="" />
          </div>
          <span>Resetar</span>
        </button>
        <button onClick={onVoltarClick}>
          <div className="iconButton">
            <img src={Back} alt="" />
          </div>
          <span>Voltar</span>
        </button>
      </section>
    </main>
  );
};

export default AlimentoCriar;