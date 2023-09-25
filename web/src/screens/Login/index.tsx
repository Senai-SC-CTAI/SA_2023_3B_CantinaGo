import LogoSingUp from '../../assets/img/singuplogo.svg';
import { Link } from 'react-router-dom';
import './style.css';

export default function Login ()  {
  return (
    <div className="register-container-Login">
      <div className="div-logo-Login">
        <img src={LogoSingUp} className='Logo-Login' />
      </div>
      <div className="div-content-Login">
        <h2 className="entrar-text-Login">Entrar</h2>
        
        <div className="input-container-Login">
          <h3 className="input-label-Login">E-mail</h3>
          <input className='input-email-Login' type="email" placeholder="seuemail@estudante.sesisenai.org.br" />
        </div>
        <div className="input-container-Login">
          <div className="input-senha-Login">
            <h3 className="input-label-Login">Senha</h3>
            <input className='input-email-Login' type="password" placeholder="senha" />
          </div>
          <div className='esqueceuSenha-Login'>
            <Link to="/home" className='input_label-Login'>Esqueceu a senha?</Link>
          </div>
        </div> 
        
        <Link to="/home" className="submit-button-Login">Entrar</Link>
        <div className="login-link-Login">
          Não possui conta? <Link to="/ajuda">Faça o Cadastro</Link>
        </div>
        
        </div>
      </div>
  
  );
};

