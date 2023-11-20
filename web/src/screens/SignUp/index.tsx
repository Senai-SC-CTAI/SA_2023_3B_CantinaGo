import LogoSingUp from '../../assets/img/singuplogo.svg';
import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import './style.css';

interface Comida {
  isAdmin: boolean;
}

export default function SignUp() {

  const [cadastro, setCadastro] = useState('');
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
      // Validar campos não nulos
      if (!emailInput || !senhaInput || !confirmarSenhaInput || !telefoneInput || !turmaInput) {
        alert('Todos os campos devem ser preenchidos.');
        return;
      }

      let novoUsuario = {
        email: emailInput,
        senha: senhaInput,
        confirmarSenha: confirmarSenhaInput,
        telefone: telefoneInput,
        turma: turmaInput,
      };

      // Enviar solicitação apenas se os campos não forem nulos
      await axios.post('http://localhost:8090/usuario', novoUsuario);

      // Resto do código
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

  // verificar usuario

  const [isAdmin, setisAdmin] = useState<boolean>(true)
  const [comida, setComida] = useState<Comida[]>([])

  const fetchComida = async () => {
    try {
      const response = await axios.get<Comida[]>('http://localhost:8090/comidas');
    } catch (error) {
      console.log('error', error);

    }
  };

  const handleViewComida = () => {
    fetchComida();
  };

  if (!isAdmin) {
    window.location.href = "./login";
  }

  return (

    <div className="container-Register">
      <div className="div-logo">
        <img src={LogoSingUp} className='Logo' alt="Logo" />
      </div>
      <div className="div-content">
        <h2 className='title'>Cadastrar</h2>

        <div className="input-container">
          <label htmlFor="email" className="input-label">E-mail</label>
          <input id="email" className='input-Register' type="email" placeholder="seuemail@estudante.sesisenai.org.br" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
        </div>
        <div className="main-inputs">
          <div className="input-other">
            <label htmlFor="senha" className="input-label">Senha</label>
            <input id="senha" className='input-Register' type="password" placeholder="senha" value={senhaInput} onChange={(e) => setSenhaInput(e.target.value)} />
          </div>
          <div className="input-other">
            <label htmlFor="confirmar-senha" className="input-label">Confirmar Senha</label>
            <input id="confirmar-senha" className='input-Register' type="password" placeholder="senha" value={confirmarSenhaInput} onChange={(e) => setConfirmarSenhaInput(e.target.value)} />
          </div>
          <div className="input-other">
            <label htmlFor="telefone" className="input-label">Telefone</label>
            <input id="telefone" className='input-Register' type="text" placeholder="48 99999-9999" value={telefoneInput} onChange={(e) => setTelefoneInput(e.target.value)} />
          </div>
          <div className="input-other">
            <label className="input-label">Turma</label>
            <input id="turma" className='input-Register' type="text" placeholder="3B" value={turmaInput} onChange={(e) => setTurmaInput(e.target.value)} />
          </div>
        </div>
        <button onClick={handleSubmit} className="submit-button">Cadastrar</button>
        <div className="login-link">
          <p>
            Já possui conta?
          </p>
          <Link to="/login">Faça o login</Link>
        </div>
      </div>
    </div>
  );
};
