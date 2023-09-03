

import './style.css'
import '../StyleTemplate/style.css'
import logo from '../../assets/icons/Logo.svg'
import user from '../../assets/icons/User.svg'
import React, { useState } from 'react';

function Header() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setActiveItem(item);
  };

  return (
    <>
      <header className="header">
        <div className="headerContent1">
          <div className="logo" onClick={() => handleItemClick('Home')}>
            <img src={logo}/>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Buscar</a>
              </li>
              <li>
                <a href="#">Sobre</a>
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
