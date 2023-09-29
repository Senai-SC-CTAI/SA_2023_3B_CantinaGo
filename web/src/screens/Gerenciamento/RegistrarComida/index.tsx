import './style.css'
import Header from '../../../components/Header/index'



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
          <button>Registrar Comida</button  >
          <button>Resetar Informações</button>
          <button>Editar Cardapio</button>
        </div>
       </div>
      </main>
    </>
  )
}

export default RegistrarComida
