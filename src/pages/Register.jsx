import React from 'react';

function Register(){
    return(
        <>
                <section>
                    <section id="card">
                        <header>
                            <h3>Registrarse</h3>
                        </header>
                        <form id="datos_usuario">
                            <div>
                                <label>Nombre</label>
                                <input type="text" class="fullWidth bigger" required/>
                            </div>
                            <div>
                                <label>Apellido</label>
                                <input type="text" class="fullWidth bigger" required/>
                            </div>
                            <div>
                                <label>Correo</label>
                                <input type="email" id = "correo" class="fullWidth bigger" required/>
                            </div>
                            <div>
                                <label>Confirmaci&oacute;n de correo</label>
                                <input type="email" id = "confirmacion_correo" class="fullWidth bigger" required/>
                            </div>
                            <div>
                                <label>Contrase&ntilde;a</label>
                                <input type= "password" id = "password" class="fullWidth bigger" required/>
                            </div>
                            <div>
                                <label>Confirmaci&oacute;n de contrase&ntilde;a</label>
                                <input type= "password" id = "confirmacion_password" class="fullWidth bigger" required/>
                            </div>
                            <div>
                                <label>Navegador preferido</label>
                                <select class="fullWidth" required>
                                    <option disabled selected>Seleccione su navegador favorito</option>
                                    <option value="chrome">Google Chrome</option>
                                    <option value="firefox">Mozilla Firefox</option>
                                    <option value="edge">Microsoft Edge</option>
                                    <option value="opera">Opera</option>
                                    <option value="safari">Safari</option>
                                </select>
                            </div>
                            <div>
                                <label>Informaci&oacute;n adicional</label>
                                <textarea class="fullWidth bigger" rows="5" required></textarea>
                            </div>
                            <div>
                                <label>Fecha actual</label>
                                <output class="fullWidth">14/04/2021</output>
                            </div>
                            <div>
                                <label>Curso actual</label>
                                <input type="text" list="cursos" class="fullWidth" required/>
                                <datalist id="cursos">
                                    <option>Optativo 1</option>
                                    <option>Bases de datos</option>
                                    <option>Ingenieria del software</option>
                                </datalist>
                            </div>
                            <div class="centered">
                            <input type="submit" value="Registrarse"/>
                            </div>
                        </form>
                    </section>
                </section>
        </>
    );
}

export default Register;