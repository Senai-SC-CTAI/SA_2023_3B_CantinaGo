import * as React from 'react'
import "./style.css";
import Ok from "../../../assets/icons/Ok.svg";
import Reset from "../../../assets/icons/Reset.svg"
import Back from "../../../assets/icons/Back.svg"
import { useState, useEffect } from "react";
import axios from "axios";
import ImageInput from "../../imageInput";

//FAZER MODAL

const AlimentoEditar = ({ alimento, onVoltarClick }) => {
  const [formState, setFormState] = useState({ ...alimento });

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = () => {
    // Aqui você terá a lógica para enviar os dados atualizados para a API
    // Utilize formState para obter os dados atualizados do alimento
    // Implemente a lógica de atualização na API

    // Após a atualização, você pode redirecionar para a visualização principal
    onVoltarClick();
  };

    const handleReset = () => {
    // Pode ser útil reiniciar os campos do formulário para os valores originais
    setFormState({ ...alimento });
  };


  return (
    <main className="AlimentoEditarMain">
      <section className="section1AlimentoEditar">
        <h4>Editar Alimento</h4>
        <div className="accordionCriar">
          {/* <form onSubmit={handleSubmit}> */}

          <input
            placeholder="Nome"
            type="text"
            name="nome"
            value={formState.nome}
            onChange={handleInputChange}
          ></input>
          <input
            placeholder="Calorias"
            name="calorias"
            type="number"
            value={formState.calorias}
            onChange={handleInputChange}
          ></input>
          <input
            placeholder="Preço"
            type="number"
            name="preco"
            value={formState.preco}
            onChange={handleInputChange}
            ></input>
          <input
            placeholder="Categoria"
            type="text"
            name="categoria"
            value={formState.categoria}
            onChange={handleInputChange}
            ></input>
          <input
            placeholder="Ingredientes"
            type="text"
            name="ingredientes"
            value={formState.ingredientes}
            onChange={handleInputChange}
            ></input>
          <ImageInput/>
            {/* </form> */}
        </div>
      </section>
      <section className="section2AlimentoEditar">
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

export default AlimentoEditar;