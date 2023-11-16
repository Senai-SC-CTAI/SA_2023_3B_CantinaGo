import './style.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import ReplayIcon from '@mui/icons-material/Replay';

interface Feedback {
  data: string;
  comentario: string;
}

export const FeedbackComponent = () => {

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []); 
  
  const fetchFeedbacks = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 700));
      const response = await axios.get<Feedback[]>('http://localhost:8090/feedback');
      setFeedbacks(response.data);
    } catch (error) {
      setError('Sem feedbacks por enquanto.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <button onClick={fetchFeedbacks} 
        disabled={loading} 
        className='btnReload'>
        <ReplayIcon />
      </button> 

      {loading && <p>Carregando feedbacks...</p>}

      {error && <p>{error}</p>}

      <div className='feedbacksContainer'>
        {feedbacks.map((feedback, index) => (
          <div key={index} className='feedbackItems'>
            <p>Comentário</p>
            <span className='comentario'>"{feedback.comentario}"</span>
            <span className='data'>{feedback.data}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
