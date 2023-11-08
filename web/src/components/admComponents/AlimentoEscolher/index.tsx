import React from 'react'
import './style.css'
import Mais from "../../../assets/icons/Mais.svg"
import Buscar from "../../../assets/icons/Buscar.svg"
import LixoLaranja from "../../../assets/icons/LixoLaranja.svg"
import LixoPreto from "../../../assets/icons/LixoPreto.svg"
import EditarLaranja from "../../../assets/icons/EditarLaranja.svg"
import EditarPreto from "../../../assets/icons/EditarPreto.svg"

const AlimentoEscolher = () => {
  return (
    <main className='AlimentoEscolherMain'>
        <section className='section1AlimentoEscolher'>
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
                            <span></span>
                        </div>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Pastel</label>
                            <span></span>
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name='accordion' id="second"/>
                    <label className='labelComidaAlimentoEscolher' htmlFor="second">Doces</label>
                    <div className='content'>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Crossaint</label>
                            <span></span>
                        </div>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Brigadeiro</label>
                            <span></span>
                            
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name='accordion' id="third"/>
                    <label className='labelComidaAlimentoEscolher' htmlFor="third">Bebidas</label>
                    <div className='content'>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Suco de uva</label>
                            <span></span>
                        </div>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Água</label>
                            <span></span>
                        </div>
                    </div>
                </li>
                <li>
                    <input type="radio" name='accordion' id="fourth"/>
                    <label className='labelComidaAlimentoEscolher' htmlFor="fourth">Snacks</label>
                    <div className='content'>
                    <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Salgadinho</label>
                            <span></span>
                        </div>
                        <div>
                            <label className='nomeComidaAlimentoEscolher' htmlFor="scales">• Barra de Chocolate</label>
                            <span></span>
                        </div>
                    </div>
                </li>

            </ul>
           
        </section>
        <section className='section2AlimentoEscolher'>
            <button>
                <img src={Mais} alt="" />
                <div>Adicionar</div>
            </button>
        </section>
    </main>
  )
}

export default AlimentoEscolher