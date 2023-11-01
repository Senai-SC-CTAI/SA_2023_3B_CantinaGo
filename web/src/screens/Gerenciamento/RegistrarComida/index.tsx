import './style.css'
import Header from '../../../components/Header/index'
import { FaArrowRotateLeft, FaCheck, FaCalendarDays } from "react-icons/fa6";






function RegistrarComida() {

  return (
    <>
      <Header />

      <main className='mainRegistrarComida'>
       <h1 className='titleRegistrarComida'>Cadastro de Comida</h1>
       <div className='gridRegistrarComida'>

          <div className='titleInfoRegistrarComida'>
            <p>Nova Comida</p>
          </div>
        <section className='infosRegistrarComida'>
          <article className='inputsRegistrarComida'>
            <p>Informações</p>
            <input placeholder='Nome'></input>
            <input placeholder='Calorias'></input>
            <input placeholder='Preço'></input>
            <input placeholder='Categoria'></input>
            <input placeholder='Igredientes'></input>
          </article>
          <article className='imagemRegistrarComida'>
            <p>Imagem</p>
            <div>

            </div>
          </article>
        </section>
        <div className='botoesRegistrarComida'>
          <button> <FaCheck size='4vw'/> Registrar<br /> Comida</button  >
          <button> <FaArrowRotateLeft size='4vw'/>  Resetar <br /> Informações</button>
          <button><FaCalendarDays size='4vw'/> Editar <br /> Cardapio</button>
        </div>
       </div>
      </main>
    </>
  )
}

export default RegistrarComida
