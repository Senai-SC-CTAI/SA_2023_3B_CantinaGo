import LogoSingUp from '../../assets/img/singuplogo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import './style.css';

export default function SignUp() {
 
  const [, setCadastro] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');
  const [confirmarSenhaInput, setConfirmarSenhaInput] = useState('');
  const [telefoneInput, setTelefoneInput] = useState('');
  const [turmaInput, setTurmaInput] = useState('');
  const fetchCadastro = async () => {
    try {
      const response = await axios.get('http://localhost:8090/usuario');
      setCadastro(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };
 
  useEffect(() => {
    fetchCadastro();
  }, []);

  const handleSubmit = async () => {
    try {
      let novoUsuario = {
        email: emailInput,
        senha: senhaInput,
        confirmarSenha: confirmarSenhaInput,
        telefone: telefoneInput,
        turma: turmaInput,
      }
      await axios.post('http://localhost:8090/usuario', novoUsuario);
      fetchCadastro();
      setEmailInput('');
      setSenhaInput('');
      setConfirmarSenhaInput('');
      setTelefoneInput('');
      setTurmaInput('');
    } catch (error) {
      console.error('Erro ao criar o cadastro:', error);
    }
  };

  return (
    
    <div className="register-container">
      <div className="div-logo">
        <img src={LogoSingUp} className='Logo' alt="Logo" />
      </div>
      <div className="div-content">
        <h2>Cadastrar</h2>
        
        <div className="input-container">
          <label htmlFor="email" className="input-label">E-mail</label>
          <input id="email" className='input-email' type="email" placeholder="seuemail@estudante.sesisenai.org.br" value={emailInput} onChange={(e) => setEmailInput(e.target.value)}  />
        </div>
        <div className="input-left">
          <div className="input-senha">
            <label htmlFor="senha" className="input-label">Senha</label>
            <input id="senha" className='input-email' type="password" placeholder="senha" value={senhaInput} onChange={(e) => setSenhaInput(e.target.value)} />
          </div>
          <div className="input-senha">
            <label htmlFor="confirmar-senha" className="input-label">Confirmar Senha</label>
            <input id="confirmar-senha" className='input-email' type="password" placeholder="senha" value={confirmarSenhaInput} onChange={(e) => setConfirmarSenhaInput(e.target.value)} />
          </div>
        </div>
        <div className="input-right">
          <div className="input-telefone">
            <label htmlFor="telefone" className="input-label">Telefone</label>
            <input id="telefone" className='input-email' type="number" placeholder="48 99999-9999" value={telefoneInput} onChange={(e) => setTelefoneInput(e.target.value)} />
          </div>
          <div className="input-turma">
            <label htmlFor="turma" className="input-label">Turma</label>
            <input id="turma" className='input-email' type="text" placeholder="XX" value={turmaInput}  onChange={(e) => setTurmaInput(e.target.value)} />
          </div>
        </div>
        <button onClick={handleSubmit} className="submit-button">Cadastrar</button>
        <div className="login-link">
          Já possui conta? <Link to="/login">Faça o login</Link>
        </div>
      </div>
    </div>
  );
};

