import './style.css'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import Card from '../../components/Card'


function App() {

  return (
    <><section className='mainSearch'>
      <Header/>
      <div className="searchContainer">
        <h3>Buscar</h3>
        <input type="text" />
      </div>
      <h1>Salgados</h1>
      <div className="typeContainer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
      </div>
      <h1>Doces</h1>
      <div className="typeContainer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <h1>Bebidas</h1>
      <div className="typeContainer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <h1>Snacks</h1>
      <div className="typeContainer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
    </>
  )
}

export default App
