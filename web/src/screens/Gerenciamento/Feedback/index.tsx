import { useState } from 'react';
import './style.css'
import axios from "axios";

interface Feedback {
  data: string;
  comentario: string;
}
  
export const FeedbackComponent = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get<Feedback[]>('http://localhost:8090/feedback');
      setFeedbacks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewFeedbacks = () => {
    fetchFeedbacks();
  };

  return (
    <div>
      <button className='btn' onClick={handleViewFeedbacks}>
        <p className='buttonGerenciamento'>Mostrar Feedbacks</p>
      </button>

      <div className='feedbacksContainer'>
        {feedbacks.map((feedback, index) => (
          <div key={index} className='feedbackItem'>
            <p>Data: {feedback.data}</p>
            <p>Comentário: {feedback.comentario}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
