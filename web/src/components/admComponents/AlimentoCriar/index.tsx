import React from "react";
import "./style.css";
import Mais from "../../../assets/icons/Mais.svg";
import Reset from "../../../assets/icons/Reset.svg"
import { useState, useEffect } from "react";
import axios from "axios";
import ImageInput from "../../imageInput";

//FAZER MODAL

const AlimentoCriar = () => {
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
      const response = await axios.get("http://127.0.0.1:5173/RegistrarComida");
      setComidas(response.data);
    } catch (error) {
      console.log("error", error);
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
      await axios.post("http://localhost:5173/RegistrarComida", novaComida);
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

  // const [comidas, setComidas] = useState([]);
  // const [nomeInput, setNomeInput] = useState('');
  // const [caloriasInput, setCaloriasInput] = useState('');
  // const [precoInput, setPrecoInput] = useState('');
  // const [categoriaInput, setCategoriaInput] = useState('');
  // const [ingredientesInput, setIngredientesInput] = useState('');

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <main className="AlimentoCriarMain">
      <section className="section1AlimentoCriar">
        <h4>Novo Alimento</h4>
        <div className="accordionCriar">
          <input
            placeholder="Nome"
            name="nomeInput"
            value={formState.nomeInput}
            onChange={handleInputChange}
          ></input>
          <input
            placeholder="Calorias"
            name="caloriasInput"
            value={formState.caloriasInput}
            onChange={handleInputChange}
          ></input>
          <input
            placeholder="Preço"
            name="precoInput"
            value={formState.precoInput}
            onChange={handleInputChange}
          ></input>
          <input
            placeholder="Categoria"
            name="categoriaInput"
            value={formState.categoriaInput}
            onChange={handleInputChange}
          ></input>
          <input
            placeholder="Ingredientes"
            name="ingredientesInput"
            value={formState.ingredientesInput}
            onChange={handleInputChange}
          ></input>
          <ImageInput/>
        </div>
      </section>
      <section className="section2AlimentoCriar">
        <button onClick={handleSubmit}>
          <img src={Mais} alt="" />
          <div>Adicionar</div>
        </button>
        <button>
                <img src={Reset} alt="" />
                <div>Resetar</div>
            </button>
      </section>
    </main>
  );
};

export default AlimentoCriar;
