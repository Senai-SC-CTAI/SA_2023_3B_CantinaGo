import './styles.css'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FeedbackComponent } from "../../components/Feedback";
import FoodsImage from '../../assets/img/ImageHeader.png'

const Statics = () => {
    scrollTo(0, 0)
    return (
        <>
            <Header />
                <header className='headerGerenciamento'>
                    <section className='headerContentGerenciamento'>
                        <h1>Estatísticas</h1>
                    </section>
                    <img src={FoodsImage} className='foodImageHomeGerenciamento' />
                </header>
            <div className="containerStatics">
                <h1 className='title'>Feedbacks</h1>
                <FeedbackComponent />
            </div>
            <Footer />
        </>
    )
}

export default Statics;