import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './styles.css'

export default function Statics() {
    scrollTo(0,0)
    return (
        <>
            <Header />
            <div className="containerStatics">
                <h1 className="title">Estatísticas</h1>
                
            </div>
            <Footer />
        </>
    )
}