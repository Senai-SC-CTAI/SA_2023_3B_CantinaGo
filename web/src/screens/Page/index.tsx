import './styles.css'
import logo from '../../assets/icons/Logo.svg'
import mobileapp from '../../assets/img/mobileapp.png'
import circlesvg from '../../assets/img/circle-svg.svg'
import { WaveSvg } from '../../components/WaveSvg'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Page() {
    return (
        <>
            <HeaderPage />
            <div className="pageContainer">
                <h1 className='pageTitle'>Chegou a hora de otimizar 
                  o   <span id='orange'>cardápio</span> da cantina.</h1>
                <img src={logo} />
            </div>
            <WaveSvg />
            <div className="contentPage">
                <div className="app">
                    <h1>Baixe o App</h1>
                    <p>e tenha todo cardápio em suas mãos.</p>
                    <span>Adquira em</span>
                </div>
                <img src={mobileapp} className='phone' />
                <img src={circlesvg} id='circleSvg' />
            </div>
        </>
    );
}

function HeaderPage() {

    const [activeItem, setActiveItem] = useState('Home');

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
                                <NavLink to="/page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sobre">Sobre</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Contato</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="loginSec">
                    <NavLink to="/login">
                        <p className='btnSignIn'>
                            Entrar
                        </p>
                    </NavLink>
                    <NavLink to='/signup'>
                        <p className='reg'>
                            Registrar
                        </p>
                    </NavLink>
                </div>
            </header>
        </>
    )
}