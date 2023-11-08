import React from 'react'
import './style.css'
import ok from "../../../assets/icons/Ok.svg"
import Reset from "../../../assets/icons/Reset.svg"

const Escolhido = () => {
  return (
    <main className='EscolhidoMain'>
        <section className='section1Escolhido'>
            <h4>Comidas do dia</h4>
            <ul className="accordion">
            <li>
                    <input type="radio" name='accordion' id="first"/>
                    <label className='labelComidaEScolhido' htmlFor="first">Salgados</label>
                    <div className='content'>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label className='nomeComidaEscolhido' htmlFor="scales">Pão de Queijo</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label className='nomeComidaEscolhido' htmlFor="scales">Pastel</label>
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name='accordion' id="second"/>
                    <label className='labelComidaEScolhido' htmlFor="second">Doces</label>
                    <div className='content'>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label className='nomeComidaEscolhido' htmlFor="scales">Crossaint</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label className='nomeComidaEscolhido' htmlFor="scales">Brigadeiro</label>
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name='accordion' id="third"/>
                    <label className='labelComidaEScolhido' htmlFor="third">Bebidas</label>
                    <div className='content'>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label className='nomeComidaEscolhido' htmlFor="scales">Suco de uva</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label className='nomeComidaEscolhido' htmlFor="scales">Água</label>
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name='accordion' id="fourth"/>
                    <label className='labelComidaEScolhido' htmlFor="fourth">Snacks</label>
                    <div className='content'>
                    <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label className='nomeComidaEscolhido' htmlFor="scales">Salgadinho</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label className='nomeComidaEscolhido' htmlFor="scales">Barra de Chocolate</label>
                        </div>
                    </div>
                </li>

            </ul>
           
        </section>
        <section className="section2AlimentoCriar">
            <button>
            <div className="iconButton">
                <img src={ok} alt="" />
            </div>
            <span>Confirmar</span>
            </button>
            <button>
            <div className="iconButton">
                <img src={Reset} alt="" />
            </div>
            <span>Resetar</span>
            </button>
        </section>
    </main>
  )
}

export default Escolhido
