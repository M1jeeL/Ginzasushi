import React, { useState } from "react";
import "./FormRegister.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from "reactstrap";


export default function FormRegister() {

  const [formRegister, setFormRegister] = useState({
    nombre: "",
    apellido: "",
    email: "",
    confirmacion_email: "",
    password: "",
    confirmacion_password: "",
    celular: "",
    comuna:"",
    calle: "",
    numeracion: undefined,
    depto: "",
  }); //Estado de tipo objeto para controlar flujo de datos del formulario de registro

  const handleChange = e => {
    //Capturo el cambio de estado en los Input
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };

  const validarDatos = e => {
    if(e.target.value.length > 0 && e.target.type !== 'email'){
      e.target.classList.remove('is-invalid')
      e.target.classList.add('is-valid')
    } else{
      e.target.classList.remove('is-valid')
      e.target.classList.add('is-invalid')
    }
  }

  const validarEmail = e => {
     if(e.target.type === 'email'){
      const er = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if( er.test(e.target.value)){
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
      } else {
         e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
      }
    }
  }
  
  const confirmarEmail = e => {
    if (e.target.value === formRegister.email){
      e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    } else {
         e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
      }
  }

  const validarPassword = e => {
    if(e.target.type === 'password'){
      const er = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if( er.test(e.target.value)){
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
      } else {
         e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
      }
    }
  }

  const confirmarPassword = e => {
    if (e.target.value === formRegister.password){
      e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    } else {
         e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
      }
  }

  const validarCelular = e => {
    if (e.target.type === "tel"){
    const er = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/

    if( er.test(e.target.value)){
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
      } else {
         e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
      }
    
  }
  }
    // const verificarCorreo = e => {
  //     if (e.target.value.email === e.target.value.confirmacionEmail){

  //     };
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formRegister.nombre ||
      !formRegister.apellido ||
      !formRegister.email ||
      !formRegister.confirmacion_email ||
      !formRegister.password ||
      !formRegister.confirmacion_password ||
      !formRegister.celular ||
      !formRegister.calle ||
      !formRegister.numeracion
    ) {
      alert("Datos incompletos");
      return;
    }
    alert("El formulario se ha enviado correctamente");
  };

  return (
      <Form className="container" onSubmit={handleSubmit}>
        <h4>Perfil</h4>
        <Row form>
          <Col lg={4} md={6} sm={12} >
            <FormGroup className="form-title" row>
              <Label className="form-text" htmlFor="nombre">
                Nombre *
              </Label>
              <Input
                type="text"
                id="nombre"
                name="nombre"
                value={formRegister.nombre}
                required
                onChange={(e) => {
                  handleChange(e);
                  validarDatos(e)}
                }
              />
            </FormGroup>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <FormGroup className="form-title">
              <Label className="form-text" htmlFor="apellido">
                Apellido *
              </Label>
              <Input
                type="text"
                id="apellido"
                name="apellido"
                value={formRegister.apellido}
                required
                onChange={(e) => {
                  handleChange(e);
                  validarDatos(e)}
                }
              />
            </FormGroup>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <FormGroup className="form-title">
              <Label className="form-text" htmlFor="email">
                Correo *
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formRegister.email}
                required
                onChange={(e) => {
                  handleChange(e);
                  validarEmail(e)}
                }
              />
            </FormGroup>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <FormGroup className="form-title">
              <Label className="form-text" htmlFor="confirmacion_email">
                Confirmaci&oacute;n de correo *
              </Label>
              <Input
                type="email"
                id="confirmacion_email"
                name="confirmacion_email"
                value={formRegister.confirmacionEmail}
                required
                onChange={(e) => {
                  handleChange(e);
                  confirmarEmail(e)}
                }
              />
            </FormGroup>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <FormGroup className="form-title">
              <Label className="form-text" htmlFor="nombre">
                Contrase&ntilde;a *
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formRegister.password}
                required
                onChange={(e) => {
                  handleChange(e);
                  validarPassword(e)}
                }
              />
            </FormGroup>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <FormGroup className="form-title">
              <Label className="form-text" htmlFor="nombre">
                Confirmaci&oacute;n de contrase&ntilde;a *
              </Label>
              <Input
                type="password"
                id="confirmacion_password"
                name="confirmacion_password"
                value={formRegister.confirmacionPassword}
                required
                onChange={(e) => {
                  handleChange(e);
                  confirmarPassword(e)}
                }
              />
            </FormGroup>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <FormGroup className="form-title">
              <Label className="form-text" htmlFor="nombre">
                Celular *
              </Label>
              <Input
                type="tel"
                id="celular"
                name="celular"
                value={formRegister.celular}
                placeholder="ej: 987654321"
                pattern="[0-9 +]+"
                required
                onChange={(e) => {
                  handleChange(e);
                  validarCelular(e)}
                }
              />
            </FormGroup>
          </Col>
        </Row>

          <h4>Direcci&oacute;n de despacho</h4>

        <Row form>
          <Col lg={4} md={6} sm={12}>
            <FormGroup className="form-title form-comuna">
              <Label className="form-text" htmlFor="comuna">
                Comuna *
              </Label>
              <Input
                name="comuna"
                id="comuna"
                type="select"
                value={formRegister.comuna}
                required
                onChange={handleChange}
              >
                <option value="" disabled>
                  Seleccione su comuna
                </option>
                <option value="El bosque">El Bosque</option>
                <option value="La cisterna">La Cisterna</option>
                <option value="San ramon">San Ram&oacute;n</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <FormGroup className="form-title">
              <Label className="form-text" htmlFor="calle">
                Calle *
              </Label>
              <Input
                type="text"
                id="calle"
                name="calle"
                value={formRegister.calle}
                required
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <FormGroup className="form-title">
              <Label className="form-text" htmlFor="numeracion">
                N&uacute;mero *
              </Label>
              <Input
                type="text"
                id="numeracion"
                name="numeracion"
                value={formRegister.numeracion}
                required
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col lg={2} md={6} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="calle">
              Depto (opcional)
            </Label>
            <Input
              type="text"
              id="depto"
              name="depto"
              value={formRegister.depto}
              onChange={handleChange}
            />
          </FormGroup>
          </Col>
        </Row>
        <Button type="submit" color="warning" size="lg">
          Crear Cuenta
        </Button>
      </Form>
  );
}
