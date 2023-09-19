import LogoSingUp from '../../assets/img/singuplogo.svg';
import { Link } from 'react-router-dom';
import './style.css';

const RegisterForm = () => {
  return (
    <div className="register-container">
      <div className="div-logo">
        <img src={LogoSingUp} className='Logo' />
      </div>
      <div className="div-content">
        <h2>Cadastrar</h2>
        
        <div className="input-container">
          <h3 className="input-label">E-mail</h3>
          <input className='input-email' type="email" placeholder="seuemail@estudante.sesisenai.org.br" />
        </div>
        <div className="input-left">
          <div className="input-senha">
            <h3 className="input-label">Senha</h3>
            <input className='input-email' type="password" placeholder="senha" />
          </div>
    
        </div>
        </div>
        <button className="submit-button">Entrar</button>
        <div className="login-link">
          Não possui conta? <Link to="/login">Faça o Cadastro</Link>
        </div>
      </div>
  
  );
};

export default RegisterForm;
