import React, { useState, useEffect } from 'react';
import './style.css';
import ok from "../../../assets/icons/Ok.svg";
import Reset from "../../../assets/icons/Reset.svg";

const Escolhido = () => {
  const [categorias, setCategorias] = useState<string[]>([]);
  const [comidasPorCategoria, setComidasPorCategoria] = useState<Record<string, { nome: string }[]>>({});

  useEffect(() => {
    // Função para obter dados do servidor
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8090/comidas');
        const data = await response.json();

        // Extrair categorias únicas
        const uniqueCategorias: string[] = [...new Set(data.map((comida: { categoria: unknown; }) => comida.categoria)) as unknown as string[]];
        setCategorias(uniqueCategorias as string[]);

        // Agrupar comidas por categoria
        const comidasPorCategoriaObj: Record<string, any[]> = {};
        uniqueCategorias.forEach((categoria: string) => {
          comidasPorCategoriaObj[categoria] = data.filter((comida: { categoria: string }) => comida.categoria === categoria);
        });
        setComidasPorCategoria(comidasPorCategoriaObj);
      } catch (error) {
        console.error('Erro ao buscar dados do servidor:', error);
      }
    };

    fetchData();
  }, []);

  function handleReset() {
    document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]').forEach(el => (el.checked = false));
  }

  return (
    <main className="EscolhidoMain">
      <section className="section1Escolhido">
        <h4>Comidas do dia</h4>
        <ul className="accordion">
          {categorias.map((categoria, index) => (
            <li key={index}>
              <input type="radio" name="accordion" id={`category-${index}`} />
              <label className="labelComidaEScolhido" htmlFor={`category-${index}`}>
                {categoria}
              </label>
              <div className="content">
                {comidasPorCategoria[categoria].map((comida: { nome: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, i: React.Key | null | undefined) => (
                  <div key={i}>
                    <input type="checkbox" id={`food-${i}`} name={`food-${i}`} />
                    <label className="nomeComidaEscolhido" htmlFor={`food-${i}`}>
                      {comida.nome}
                    </label>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="section2AlimentoCriar">
        <button>
          <div className="iconButton">
            <img src={ok} alt="" />
          </div>
          <span>Confirmar</span>
        </button>
        <button id="buttonResetEscolhido" onClick={handleReset}>
          <div className="iconButton">
            <img src={Reset} alt="" />
          </div>
          <span>Resetar</span>
        </button>
      </section>
    </main>
  );
};

export default Escolhido;