import React from 'react'
import InfoBox from './InfoBox'

export default function FormRegister() {
    return (
        <>
            <form className = "form-container">
                <h1>Perfil</h1>
                <hr />
                <InfoBox info = 'Nombre' type= 'text'/>
                <InfoBox info = 'Apellido' type= 'text'/>
                <InfoBox info = 'Correo' type= 'email'/>
                <InfoBox info = 'Confirmaci&oacute;n de correo' type= 'email'/>
                <InfoBox info = 'Contrase&ntilde;a' type= 'password'/>
                <InfoBox info = 'Confirmaci&oacute;n de contrase&ntilde;a' type= 'password'/> 
                <InfoBox info = 'Tel&eacute;fono' type= 'tel'/> 
                <h1>Direcci&oacute;n de despacho</h1>
                <hr />
                <InfoBox info = 'Comuna' type= 'checkbox'/> 
                <InfoBox info = 'Calle' type= 'text'/> 
                <InfoBox info = 'N&uacute;mero' type= 'number'/> 
                <InfoBox info = 'Depto' type= 'text'/> 
            </form>
        </>
    )
}
