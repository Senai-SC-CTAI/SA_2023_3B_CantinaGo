import LogoSingUp from '../../assets/img/singuplogo.svg'
import { Link } from 'react-router-dom';
import './style.css'

const RegisterForm = () => {
  return (
    <div className="register-container">
      <div className="div-logo">
     <img src={LogoSingUp} className='Logo'/>
      </div>
      <div className="div-content">
        <h2>Cadastrar</h2>
      <div className="input-container">
        <h3>E-mail</h3>
        <input type="email" placeholder="seuemail@estudante.sesisenai.org.br" />
      </div>
      <div className="input-container">
        <h3>Senha</h3>
        <input type="password" placeholder="senha" />
      </div>
      <div className="input-container">
        <h3>Confirmar Senha</h3>
        <input type="password" placeholder="senha" />
      </div>
      <div className="input-container">
        <h3>Telefone</h3>
        <input type="text" placeholder="48 99999-9999" />
      </div>
      <div className="input-container">
        <h3>Turma</h3>
        <input type="text" placeholder="XX" />
      </div>
      <button>Entrar</button>
      <div className="login-link">
        Já possui conta? <Link to="/login">Faça o login</Link>
      </div>
      </div>
    </div>
  );
};

export default RegisterForm;

