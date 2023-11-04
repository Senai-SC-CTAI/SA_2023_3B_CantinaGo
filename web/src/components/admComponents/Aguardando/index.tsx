import React from 'react'
import './style.css'
import ok from "../../../assets/icons/Ok.svg"
import Reset from "../../../assets/icons/Reset.svg"

const AguardandoData = () => {
  return (
    <main className='aguardandoDataMain'>
        <section className='section1AguardandoData'>
            <h4>Aguardando data...</h4>
            <p>Selecione uma data para as opções de escolha aparecerem aqui...</p>
        </section>
        <section className='section2AguardandoData'>
            <button>
                <img src={ok} alt="" />
                <div>Confirmar</div>
            </button>
            <button>
                <img src={Reset} alt="" />
                <div>Resetar</div>
            </button>
        </section>
    </main>
  )
}

export default AguardandoData
