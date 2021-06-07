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
    calle: "",
    numeracion: "",
    depto: "",
  }); //Estado de tipo objeto para controlar flujo de datos del formulario de registro

  const handleChange = (e) => {
    //Capturo el cambio de estado en los Input
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };

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
    <>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                defaultValue=""
                type="select"
                value={formRegister.comuna}
                required
                onChange={handleChange}
              >
                <option value="" disabled>
                  Seleccione su comuna
                </option>
                <option value="el_bosque">El Bosque</option>
                <option value="la_cisterna">La Cisterna</option>
                <option value="la_pintana">La Pintana</option>
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
    </>
  );
}
