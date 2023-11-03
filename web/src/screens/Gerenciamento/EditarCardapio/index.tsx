import './style.css'
import Header from '../../../components/Header/index'
import FoodsImage from '../../../assets/img/ImageHeader.png'
import Image3 from '../../../assets/img/Image3Administracao.svg'

// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'


function EditarCardapio() {

  return (
    <>
    {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
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
               
              </div>
            </section>
            <img src={Image3} className='ImageEdicao'/>
          </article>
      </main>
    {/* </LocalizationProvider> */}
    </>
  )
}

export default EditarCardapio
