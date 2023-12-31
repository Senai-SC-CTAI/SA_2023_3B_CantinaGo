import LogoSingUp from '../../assets/img/singuplogo.svg';
import { Link } from 'react-router-dom';
import './style.css';
import { useState } from 'react';
import axios from 'axios'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
// interface Usuario {
//   senha: string;
//   telefone: string;
//   email: string;
//   turma: string;
// }

const logar = async (email: string, senha: string) => {
  try {
    const response = await axios.post('http://localhost:8090/api/login', {
      email: email,
      senha: senha,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [, setIsAuthenticated] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await logar(email, senha);
      if (response == true) {
        window.location.href = "/home"
      } else if (!email || !senha) {
        setIsAuthenticated(false);
        setErrorMessage("campos não podem ser nulos")
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
        return;
      } else {
        setIsAuthenticated(false);
        setErrorMessage("email ou senha incorretos")
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
        return;
      }
    } catch (error) {
      console.error('Erro ao se logar:', error);
    }
  };

  return (
    <div className="container-Login">
      <div className="div-logo-Login">
        <img src={LogoSingUp} className='Logo-Login' />
      </div>
      <div className="div-content">
        <h2 className="title">Entrar</h2>

        <div className="input-container-Login">
          <h3 className="input-label-Login">E-mail</h3>
          <input
            className='input-Login'
            type="email"
            placeholder="seuemail@estudante.sesisenai.org.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container-Login">
          {/* <div className="input-senha-Login"> */}
          <h3 className="input-label-Login">Senha</h3>
          <input
            className='input-Login'
            type="password"
            placeholder="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {/* </div> */}
          <div className='esqueceuSenha-Login'>
            <Link to="/home" className='input_label-Login'>Esqueceu a senha? Clique aqui</Link>
          </div>
        </div>
        {errorMessage && <div className="error-message"><ErrorOutlineRoundedIcon />{errorMessage}</div>}
        <button
          type="button"
          className="submit-button"
          onClick={handleLogin}>
          Entrar
        </button>
        <div className="login-link">
          Não possui conta?
          <div>
            <Link to="/SignUp">Faça o Cadastro</Link>
          </div>
        </div>

      </div>
    </div >

  );
};
