import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Button } from './Button';
import logopng from '../../img/logo.png';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    state = { 
        clicked: false
    }

    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <Link className="navbar-logo" to ="/"><img src={logopng} alt="logo.png" className="logopng"/></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key = {index}>
                                <Link className={item.cName} to={item.url} exact>
                                {item.title} 
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
                
        )
    }
}

export default Navbar;