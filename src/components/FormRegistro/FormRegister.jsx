import React, { useState } from 'react'

export default function FormRegister() {
    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert("El formulario se ha enviado correctamente")
    };

    

    return (
        <>
            <form className = "form-container" onSubmit = {handleSubmit}>
                <p>Perfil</p>
                <hr />
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                    type="text" 
                    id = "nombre" 
                    name = "nombre" 
                    value = {form.nombre}
                    required
                    onChange = {handleChange}
                    />
                    <br />
                    <label htmlFor="apellido">Apellido</label>
                    <input 
                    type="text" 
                    id = "apellido" 
                    name = "apellido" 
                    value = {form.apellido}
                    required
                    onChange = {handleChange}
                    />
                    <br />
                    <label htmlFor="email">Correo</label>
                    <input 
                    type="email" 
                    id = "email" 
                    name = "email" 
                    value = {form.email}
                    required
                    onChange = {handleChange}
                    />
                    <br />
                    <label htmlFor="confirmacion_email">Confirmaci&oacute;n de correo</label>
                    <input 
                    type="email" 
                    id = "confirmacion_email" 
                    name = "confirmacion_email" 
                    value = {form.confirmacionEmail}
                    required
                    onChange = {handleChange}
                    />
                    <br />
                    <label htmlFor="nombre">Contrase&ntilde;a</label>
                    <input 
                    type="password" 
                    id = "password" 
                    name = "password" 
                    value = {form.password}
                    required
                    onChange = {handleChange}
                    />
                    <br />
                    <label htmlFor="nombre">Confirmaci&oacute;n de contrase&ntilde;a</label>
                    <input 
                    type="password" 
                    id = "confirmacion_password" 
                    name = "confirmacion_password" 
                    value = {form.confirmacionPassword}
                    required
                    onChange = {handleChange}
                    />
                    <br />
                    <label htmlFor="nombre">Celular</label>
                    <input 
                    type="tel" 
                    id = "celular" 
                    name = "celular" 
                    value = {form.celular}
                    placeholder = ""
                    pattern = "[0-9 +]+"
                    required
                    onChange = {handleChange}
                    />
                    <br />
                </div>
                <br />
                <br />
                <p>Direcci&oacute;n de despacho</p>
                <hr />
                <div>
                    <label htmlFor="comuna">Comuna</label>
                    <select name="comuna" id="comuna" defaultValue = "" required onChange = {handleChange}>
                        <option value="" disabled>Seleccione su comuna</option>
                        <option value="el_bosque">El Bosque</option>
                        <option value="la_cisterna">La Cisterna</option>
                        <option value="la_pintana">La Pintana</option>
                    </select>
                    <br />
                    <label htmlFor="calle">Calle</label>
                    <input 
                    type="text"
                    id = "calle"
                    name = "calle"
                    value = {form.calle}
                    required
                    onChange = {handleChange}
                    />
                    <label htmlFor="numeracion">Numero</label>
                    <input 
                    type="number"
                    id = "numeracion"
                    name = "numeracion"
                    value = {form.numeracion}
                    required
                    onChange = {handleChange}
                    />
                    <label htmlFor="calle">Depto</label>
                    <input 
                    type="text"
                    id = "depto"
                    name = "depto"
                    value = {form.depto}
                    onChange = {handleChange}
                    />
                </div>
                <input type="submit" value = "Crear cuenta" />

            </form>
        </>
    )
}
