import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/logo.png'

export default function Navbar() {
    return (
        <>
            <div className = "navbar">
                <nav className = "nav-container">
                    <div className = "nav-logo">
                        <Link to = "/"><img src={logo} alt="ginzasushi" /></Link>
                    </div>
                    <div>
                        <ul className = "nav-links">
                            <li className = "item-nav-links"><Link to = "/carta">Carta</Link></li>
                            <li className = "item-nav-links"><Link to = "/register">Registro</Link></li>
                            <li className = "item-nav-links"><Link to = "/promociones">Promociones</Link></li>
                            <li className = "item-nav-links"><Link to = "/contacto">Contacto</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul  className = "nav-icons">
                            <li className = "item-nav-icons"><Link to = "/mi-cuenta"><i className = "fas fa-user"></i></Link></li>
                            <li className = "item-nav-icons"><Link to = "/carro-de-compras"><i className = "fas fa-shopping-cart"></i></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
