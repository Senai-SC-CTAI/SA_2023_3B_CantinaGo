import './style.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import FoodsImage from '../../assets/img/CantinaImg.png'

export default function About() {
    return (
        <>
        <Header />
        <div className="containerAbout">
            <h1 className='title titleAbout'>Sobre o sistema CantinaGo</h1>
            <div className="cardAbout">
          <span>O CantinaGo é um software que simplifica a experiência de pedir comida na cantina.</span>
          <p> 
            Somos uma empresa com o objetivo de solucionar o problema da Cantina nas Escolas com um sistema simples e intuitivo, conectamos o usuário com o cardápio da cantina para ver quando e onde quiser, simplificando o gerenciamento e diminuindo filas.  
            </p>
            <img src={FoodsImage} />
            </div>
        </div>
        <Footer />
        </>
    )
}