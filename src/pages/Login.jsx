import React from 'react';
import FormLogin from '../components/FormLogin/FormLogin';
import Imgcab from '../components/Imagen cabecera/Imgcab';

export default function Login() {
    return (
        <>
            <Imgcab nombrehead = "Iniciar Sesión"/>
            <FormLogin/>
        </>
    );
}
