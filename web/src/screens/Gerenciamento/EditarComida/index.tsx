  import './style.css'
  import Header from '../../../components/Header/index'
  import FoodsImage from '../../../assets/img/ImageHeader.png'
  import Image3 from '../../../assets/img/Image3Administracao.svg'
  import { useState } from 'react'
  import AguardandoData from '../../../components/admComponents/Aguardando'
  import Footer from '../../../components/Footer'
  import Escolhido from '../../../components/admComponents/Escolhido'
  import AlimentoEscolher from '../../../components/admComponents/AlimentoEscolher'
  import AlimentoCriar from '../../../components/admComponents/AlimentoCriar'

  function EditarComida() {

    const [novoAlimentoVisible, setNovoAlimentoVisible] = useState(false);

    const toggleNovoAlimento = () => {
      setNovoAlimentoVisible(!novoAlimentoVisible);
    };
  
    const handleVoltar = () => {
      setNovoAlimentoVisible(false);
    };

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
                <h2>Alimentos</h2>
                <p>Selecione ou busque um alimento para edita-lo ou deleta-lo.</p>
                <p>Cadastre novos alimentos no sistema de sua cantina!</p>
              </section>
              <img src={Image3} className='ImageEdicao'/>
            </article>
            {novoAlimentoVisible ? (
              <AlimentoCriar onVoltarClick={handleVoltar} />
            ) : (
              <AlimentoEscolher onNovoAlimentoClick={toggleNovoAlimento} />
            )}
            <Footer />
        </main>
      </>
    )
  }

  export default EditarComida
