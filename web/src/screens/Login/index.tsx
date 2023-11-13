import LogoSingUp from '../../assets/img/singuplogo.svg';
import { Link } from 'react-router-dom';
import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

interface Usuario {
  senha: string;
  telefone: string;
  email: string;
  turma: string;
  isAdmin: boolean;
}

export default function Login() {
  
  useEffect(() => {
    fetchUsuarios();
  }, [])

  // Metodo GET 
  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:8090/usuario');
      setUsuarios(response.data);
      console.log(usuarios[1].email);
      console.log(usuarios[1].senha);
      
    } catch (error) {
      console.log('Erro ao buscar Usuarios: ', error);
    }
  }
  
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  


  return (
    <div className="container-Login">
      <div className="div-logo-Login">
        <img src={LogoSingUp} className='Logo-Login' />
      </div>
      <div className="div-content">
        <h2 className="title">Entrar</h2>

        <div className="input-container-Login">
          <h3 className="input-label-Login">E-mail</h3>
          <input className='input-Login' type="email" placeholder="seuemail@estudante.sesisenai.org.br" />
        </div>
        <div className="input-container-Login">
          {/* <div className="input-senha-Login"> */}
          <h3 className="input-label-Login">Senha</h3>
          <input className='input-Login' type="password" placeholder="senha" />
          {/* </div> */}
          <div className='esqueceuSenha-Login'>
            <Link to="/home" className='input_label-Login'>Esqueceu a senha? Clique aqui</Link>
          </div>
        </div>

        <Link to="/home" className="submit-button">Entrar</Link>
        <div className="login-link">
          Não possui conta?
          <div>
            <Link to="/SignUp">Faça o Cadastro</Link>
          </div>
        </div>

      </div>
    </div>

  );
};

