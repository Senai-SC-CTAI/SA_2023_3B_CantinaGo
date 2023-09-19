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
          <div className="input-senha">
            <h3 className="input-label">Confirmar Senha</h3>
            <input className='input-email' type="password" placeholder="senha" />
          </div>
        </div>
        <div className="input-right">
          <div className="input-telefone">
            <h3 className="input-label">Telefone</h3>
            <input className='input-email' type="number" placeholder="48 99999-9999" />
          </div>
          <div className="input-turma">
            <h3 className="input-label">Turma</h3>
            <input className='input-email' type="text" placeholder="XX" />
          </div>
        </div>
        <button className="submit-button">Cadastrar</button>
        <div className="login-link">
          Já possui conta? <Link to="/login">Faça o login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
