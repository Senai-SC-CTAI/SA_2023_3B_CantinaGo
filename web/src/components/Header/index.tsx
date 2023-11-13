import './style.css'
import '../StyleTemplate/style.css'
import logo from '../../assets/icons/Logo.svg'
import user from '../../assets/icons/User.svg'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isAdmin, setisAdmin] = useState<boolean>(false)

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setActiveItem(item);
  };

  return (
    <>
      <header className="header">
        <div className="headerContent1">
          <NavLink to="/home">
            <div className="logo" onClick={() => handleItemClick('Home')}>
              <img src={logo} />
            </div>
          </NavLink>
          <nav className="nav">
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/search">Buscar</NavLink>
              </li>
              <li>
                <NavLink to="/about">Sobre</NavLink>
              </li>
              <li>
                {

                  <NavLink to="/manage">Administração</NavLink>
                }
              </li>
            </ul>
          </nav>
        </div>
        <div className="user">
          <img src={user} alt="User" />
        </div>
      </header>
    </>
  )
}

export default Header
