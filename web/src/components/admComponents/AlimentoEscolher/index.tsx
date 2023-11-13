import React, { useState, useEffect } from "react";
import "./style.css";
import Mais from "../../../assets/icons/Mais.svg";
import Buscar from "../../../assets/icons/Buscar.svg";

const AlimentoEscolher: React.FC<{ onNovoAlimentoClick: () => void }> = ({
  onNovoAlimentoClick,
}) => {
  const [categorias, setCategorias] = useState([]);
  const [comidasPorCategoria, setComidasPorCategoria] = useState<{
    [categoria: string]: any[];
  }>({});

  useEffect(() => {
    // Função para buscar dados do banco (pode ser uma chamada API, por exemplo)
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8090/comidas");
        const data = await response.json();
        organizarDados(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    // Função para organizar os dados em categorias
    const organizarDados = (dados: any[]) => {
      const categoriasSet = new Set<string>();
      const comidasPorCategoriaObj: { [key: string]: any[] } = {};

      dados.forEach((comida: { categoria: string }) => {
        categoriasSet.add(comida.categoria);

        if (!comidasPorCategoriaObj[comida.categoria]) {
          comidasPorCategoriaObj[comida.categoria] = [];
        }

        comidasPorCategoriaObj[comida.categoria].push(comida);
      });

      const categoriasArray: string[] = Array.from(categoriasSet);

      // Atualizar o estado de categorias
      setCategorias(categoriasArray as never[]);

      setComidasPorCategoria(comidasPorCategoriaObj);
    };

    // Chamar a função para buscar dados
    fetchData();
  }, []); // Executar apenas uma vez ao montar o componente

  const handleExcluirComida = async (categoria: string | number, comidaId: any) => {
    try {
      // Faça uma chamada para excluir a comida no seu banco de dados
      // Exemplo fictício:
      await fetch(`http://localhost:8090/comidas/${comidaId}`, { method: 'DELETE' });

      // Atualize o estado para refletir a exclusão
      const novasComidas = comidasPorCategoria[categoria].filter(comida => comida.id !== comidaId);
      setComidasPorCategoria({ ...comidasPorCategoria, [categoria]: novasComidas });
    } catch (error) {
      console.error('Erro ao excluir comida:', error);
    }
  };

  return (
    <main className="AlimentoEscolherMain">
      <section className="section1AlimentoEscolher">
        <form className="formAlimentoEscolher">
          <input type="text" placeholder="Buscar" />
          <img src={Buscar} alt="Buscar" />
        </form>
        <ul className="accordion">
          {categorias.map((categoria) => (
            <li key={categoria}>
              <input type="radio" name="accordion" id={categoria} />
              <label
                className="labelComidaAlimentoEscolher"
                htmlFor={categoria}
              >
                {categoria}
              </label>
              <div className="content">
                {comidasPorCategoria[categoria].map((comida) => (
                  <div key={comida.id}>
                    <label className="nomeComidaAlimentoEscolher" htmlFor={comida.nome}>
                      • {comida.nome}
                    </label>
                    <div className="spansDivEscolher">
                        <span className="editarEscolher"></span>
                        <span
                      className="lixoEscolher"
                      onClick={() => handleExcluirComida(categoria, comida.id)}
                    ></span>
                      </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="section2AlimentoCriar">
        <button id="button" onClick={onNovoAlimentoClick}>
          <div className="iconButton">
            <img src={Mais} alt="" />
          </div>
          <span>Novo alimento</span>
        </button>
      </section>
    </main>
  );
};

export default AlimentoEscolher;
