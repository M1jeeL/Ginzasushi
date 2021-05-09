import React from 'react';
import FormRegister from '../components/FormRegistro/FormRegister';
import Imgcab from '../components/Imagen cabecera/Imgcab';

function Register(){
    return(
        <>
            <Imgcab nombrehead = 'Registrarse' />
            <FormRegister/>
        </>
    );
}

export default Register;