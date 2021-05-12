import React, { useState } from 'react'
import BotonForm from '../BotonForm/BotonForm';
import { Link } from 'react-router-dom'
import './FormLogin.css';

export default function FormLogin() {
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value,
        })
    };

    return (
        <>
        <form className = "form-container">

            <div className = "form-title" >
                <label className = "form-text" htmlFor="email">Correo</label>
                <input 
                type="email" 
                id = "email" 
                name = "email" 
                value = {formLogin.email}
                required
                onChange = {handleChange}
                />
            </div>
            <div className = "form-title" >
                <label className = "form-text" htmlFor="password">Contrase&ntilde;a</label>
                <input 
                type="email" 
                id = "password" 
                name = "password" 
                value = {formLogin.password}
                required
                onChange = {handleChange}
                />
            </div>
            <div className = "olvido-password"><span><a href = "/forgot-password">¿Olvidaste tu contrase&ntilde;a?</a></span></div>
            <BotonForm type = "submit" value = "Ingresar"/>
            <div className = "crear-cuenta-login"><Link to = "/register"><span>¿No tienes cuenta? ¡Crea la tuya ahora!</span></Link></div>
           
        </form>
        </>
    )
}
