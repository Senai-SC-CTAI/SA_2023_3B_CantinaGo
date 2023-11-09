import React from 'react'
import './style.css'
import Mais from "../../../assets/icons/Mais.svg"
import Buscar from "../../../assets/icons/Buscar.svg"

const AlimentoEscolher: React.FC<{ onNovoAlimentoClick: () => void }> = ({ onNovoAlimentoClick }) => {
  return (
    <main className='AlimentoEscolherMain'>
        <section id='#aaa'className='section1AlimentoEscolher'>
            <form className='formAlimentoEscolher'>
                <input type="text" placeholder="Buscar"/>
                <img src={Buscar}/>
            </form>
            <ul className="accordion">
            <li>
                    <input type="radio" name='accordion' id="first"/>
                    <label className='labelComidaAlimentoEscolher' htmlFor="first">Salgados</label>
                    <div className='content'>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Pão de Queijo</label>
                            <span className='editarEscolher'></span>
                            <span className='lixoEscolher'></span>
                        </div>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Pastel</label>
                               <span className='editarEscolher'></span>
                            <span className='lixoEscolher'></span>
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name='accordion' id="second"/>
                    <label className='labelComidaAlimentoEscolher' htmlFor="second">Doces</label>
                    <div className='content'>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Crossaint</label>
                               <span className='editarEscolher'></span>
                            <span className='lixoEscolher'></span>
                        </div>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Brigadeiro</label>
                               <span className='editarEscolher'></span>
                            <span className='lixoEscolher'></span>
                            
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name='accordion' id="third"/>
                    <label className='labelComidaAlimentoEscolher' htmlFor="third">Bebidas</label>
                    <div className='content'>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Suco de uva</label>
                               <span className='editarEscolher'></span>
                            <span className='lixoEscolher'></span>
                        </div>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Água</label>
                               <span className='editarEscolher'></span>
                            <span className='lixoEscolher'></span>
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name='accordion' id="fourth"/>
                    <label className='labelComidaAlimentoEscolher' htmlFor="fourth">Snacks</label>
                    <div className='content'>
                    <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Salgadinho</label>
                               <span className='editarEscolher'></span>
                            <span className='lixoEscolher'></span>
                        </div>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Barra de Chocolate</label>
                               <span className='editarEscolher'></span>
                            <span className='lixoEscolher'></span>
                        </div>
                    </div>
                </li>

            </ul>
           
        </section>
        <section className='section2AlimentoCriar'>
            <button id='button' onClick={onNovoAlimentoClick}>
            <div className='iconButton'>
                <img src={Mais} alt='' />
            </div>
            <span>Novo alimento</span>
            </button>
        </section>
    </main>
  )
}

export default AlimentoEscolher
