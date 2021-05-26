import React, { useState } from 'react'
import BotonForm from '../BotonForm/BotonForm';
import './FormRegister.css'

export default function FormRegister() {
    const [formRegister, setFormRegister] = useState({
        nombre: "",
        apellido: "",
        email: "",
        confirmacion_email: "",
        password: "",
        confirmacion_password: "",
        celular: "",
        calle: "",
        numeracion: "",
        depto: ""
    }); //Estado de tipo objeto para controlar flujo de datos del formulario de registro

    const handleChange = e => { //Capturo el cambio de estado en los input
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value,
        });
    }

    // const verificarCorreo = e => {
    //     if (e.target.value.email === e.target.value.confirmacionEmail){
            
    //     };
    // };

    const handleSubmit = e => { 
        e.preventDefault();
        alert("El formulario se ha enviado correctamente");

    };
    

    return (
        <>
            <form className = "form-container" onSubmit = {handleSubmit}>
                <div className = "perfil-form-register">
                    <p >Perfil</p>
                    <hr />
                </div>
                <div className = "perfil-form">
                    <div className = "form-title" >
                        <label className = "form-text" htmlFor="nombre">Nombre</label>
                        <input 
                        type="text" 
                        id = "nombre" 
                        name = "nombre" 
                        value = {formRegister.nombre}
                        required
                        onChange = {handleChange}
                        />
                    </div>
                    
                    <div className = "form-title">
                        <label className = "form-text" htmlFor="apellido">Apellido</label>
                        <input 
                            type="text" 
                            id = "apellido" 
                            name = "apellido" 
                            value = {formRegister.apellido}
                            required
                            onChange = {handleChange}
                            />  
                    </div>
                    <div className = "form-title">
                        <label className = "form-text" htmlFor="email">Correo</label>
                        <input 
                        type="email" 
                        id = "email" 
                        name = "email" 
                        value = {formRegister.email}
                        required
                        onChange = {handleChange}
                        />    
                    </div> 
                    <div className = "form-title">
                        <label className = "form-text" htmlFor="confirmacion_email">Confirmaci&oacute;n de correo</label>
                        <input 
                        type="email" 
                        id = "confirmacion_email" 
                        name = "confirmacion_email" 
                        value = {formRegister.confirmacionEmail}
                        required
                        onChange = {handleChange}
                        />
                    </div>
                    <div className = "form-title">
                        <label className = "form-text" htmlFor="nombre">Contrase&ntilde;a</label>
                        <input 
                        type="password" 
                        id = "password" 
                        name = "password" 
                        value = {formRegister.password}
                        required
                        onChange = {handleChange}
                        />
                    </div>
                    <div className = "form-title">
                        <label className = "form-text" htmlFor="nombre">Confirmaci&oacute;n de contrase&ntilde;a</label>
                        <input 
                        type="password" 
                        id = "confirmacion_password" 
                        name = "confirmacion_password" 
                        value = {formRegister.confirmacionPassword}
                        required
                        onChange = {handleChange}
                        />
                    </div>
                    <div className = "form-title">
                        <label className = "form-text" htmlFor="nombre">Celular</label>
                        <input 
                        type="tel" 
                        id = "celular" 
                        name = "celular" 
                        value = {formRegister.celular}
                        placeholder = "ej: 987654321"
                        pattern = "[0-9 +]+"
                        required
                        onChange = {handleChange}
                        />
                    </div>
                </div>
                <div className = "direccion-form-register">
                    <p>Direcci&oacute;n de despacho</p>
                    <hr />
                </div>
                
                <div className = "direccion-despacho-form">
                    <div className = "form-comuna">
                        <div className = "form-title">
                            <label className = "form-text" htmlFor="comuna">Comuna</label>
                            <select name="comuna" id="comuna" defaultValue = "" value = {formRegister.comuna} required onChange = {handleChange}>
                                <option value="" disabled>Seleccione su comuna</option>
                                <option value="el_bosque">El Bosque</option>
                                <option value="la_cisterna">La Cisterna</option>
                                <option value="la_pintana">La Pintana</option>
                            </select>
                        </div>
                    </div>
                        <div className = "form-direccion">
                            <div className = "form-title">
                                <label className = "form-text" htmlFor="calle">Calle</label>
                                <input 
                                type="text"
                                id = "calle"
                                name = "calle"
                                value = {formRegister.calle}
                                required
                                onChange = {handleChange}
                                />
                            </div>
                            <div className = "form-numeracion">
                                <label className = "form-text" htmlFor="numeracion">N&uacute;mero</label>
                                <input 
                                type="text"
                                id = "numeracion"
                                name = "numeracion"
                                value = {formRegister.numeracion}
                                required
                                onChange = {handleChange}
                                />
                            </div>
                            <div className = "form-depto">
                                <label className = "form-text" htmlFor="calle">Depto</label>
                                <input 
                                type="text"
                                id = "depto"
                                name = "depto"
                                value = {formRegister.depto}
                                onChange = {handleChange}
                                />
                            </div>
                        </div>
                </div>
                <BotonForm type = "submit" value = "Crear cuenta" />

            </form>
        </>
    )
}
