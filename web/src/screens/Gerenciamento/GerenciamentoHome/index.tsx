import './style.css'
import Header from '../../../components/Header/index'
import {Link} from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Feedback {
  data: string;
  comentario: string;
}

function App() {

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]); // Defina o tipo Feedback[] aqui

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get<Feedback[]>('http://localhost:8090/feedback'); // Defina o tipo Feedback[] aqui
      setFeedbacks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMostrarFeedbacksClick = () => {
    fetchFeedbacks();
    console.log(feedbacks)
  };

  return (
    <>
      <Header />

      <main className='mainGerenciamento'>
        <section>
          <article className='graphic1Gerenciamento'>

          </article>
          <div className='buttonsGerenciamento'>
            <Link to='/ListaComidas'>
              <p className='buttonGerenciamento'>Comidas</p>
            </Link>
            <Link to='/EditarCardapio'>
              <p className='buttonGerenciamento'>Editar Cardápio</p>
            </Link>
            <button className='btn' onClick={handleMostrarFeedbacksClick}>
              <p className='buttonGerenciamento'>Mostrar Feedbacks</p>
            </button>
          </div>
        </section>

        <section>
          <article className='graphic2Gerenciamento'>
          <div className='feedbacksContainer'>
            {feedbacks.map((feedback, index) => (
              <div key={index} className='feedbackItem'>
                <p>Data: {feedback.data}</p>
                <p>Comentário: {feedback.comentario}</p>
              </div>
            ))}
          </div>
          </article>
          <article className='graphic3Gerenciamento'>

          </article>
        </section>
      </main>
    </>
  )
}

export default App
