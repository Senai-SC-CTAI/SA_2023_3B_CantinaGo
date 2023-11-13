import './style.css'
import Header from '../../../components/Header/index'
import FoodsImage from '../../../assets/img/ImageHeader.png'
import Image3 from '../../../assets/img/Image3Administracao.svg'
import { useState } from 'react'
import AguardandoData from '../../../components/admComponents/Aguardando'
import Footer from '../../../components/Footer'
import Escolhido from '../../../components/admComponents/Escolhido'

function EditarCardapio() {
  let date = new Date('')

  return (
    <>
    
      <Header />

      <main className='mainEdição'>
        <header className='headerEdicao'>
          <section className='headerContentEdicao'>
            <h1>Gerenciamento</h1>
          </section>
          <img src={FoodsImage} className='foodImageHomeEdicao'/>

        </header>

          <article className='contentEdicao'>
            <section>
              <h2>Cardápios</h2>
              <p>Selecione uma data para criar, editar ou deletar um cardápio!</p>
              <div className='dateEdicao'>
                <input type='date' className='datePicker' />
              </div>
            </section>
            <img src={Image3} className='ImageEdicao'/>
          </article>
          {/* <AguardandoData/> */}
          <Escolhido/>
          <Footer />
      </main>
    </>
  )
}

export default EditarCardapio
