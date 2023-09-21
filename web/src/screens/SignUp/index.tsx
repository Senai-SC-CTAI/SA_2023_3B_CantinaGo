import LogoSingUp from '../../assets/img/singuplogo.svg';
import { Link } from 'react-router-dom';
import './style.css';

export default function SignUp() {
  return (
    <div className="register-container">
      <div className="div-logo">
        <img src={LogoSingUp} className='Logo' alt="Logo" />
      </div>
      <div className="div-content">
        <h2>Cadastrar</h2>
        
        <div className="input-container">
          <label htmlFor="email" className="input-label">E-mail</label>
          <input id="email" className='input-email' type="email" placeholder="seuemail@estudante.sesisenai.org.br" />
        </div>
        <div className="input-left">
          <div className="input-senha">
            <label htmlFor="senha" className="input-label">Senha</label>
            <input id="senha" className='input-email' type="password" placeholder="senha" />
          </div>
          <div className="input-senha">
            <label htmlFor="confirmar-senha" className="input-label">Confirmar Senha</label>
            <input id="confirmar-senha" className='input-email' type="password" placeholder="senha" />
          </div>
        </div>
        <div className="input-right">
          <div className="input-telefone">
            <label htmlFor="telefone" className="input-label">Telefone</label>
            <input id="telefone" className='input-email' type="number" placeholder="48 99999-9999" />
          </div>
          <div className="input-turma">
            <label htmlFor="turma" className="input-label">Turma</label>
            <input id="turma" className='input-email' type="text" placeholder="XX" />
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

