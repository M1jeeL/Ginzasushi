import React from "react";
import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Imgcab from "../../components/Imagen cabecera/Imgcab";
import BotonWsp from "../../components/BotonWsp/BotonWsp";
import "./Contacto.scss";
const Contacto = () => {
  const [contactForm, setContactForm] = useState({
    nombre: "",
    email: "",
    celular: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    width: "12rem",
  };

  return (
    <>
      <BotonWsp />

      <Imgcab nombrehead={"Contactate con nosotros"} />
      <div className="container container-contact-form animate__animated animate__fadeIn animate__faster">
        <div className="header-contact-form ">
          &iexcl;Te responderemos a la brevedad&#33;
        </div>
        <Form className="contact-form">
          <Row form>
            <Col lg={12} md={12} sm={12}>
              <FormGroup>
                <Label className="contact-form-text" htmlFor="nombre">
                  Nombre Completo
                </Label>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={contactForm.nombre}
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <FormGroup>
                <Label className="contact-form-text" htmlFor="email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <FormGroup>
                <Label className="contact-form-text" htmlFor="celular">
                  Celular
                </Label>
                <Input
                  type="cel"
                  id="celular"
                  name="celular"
                  value={contactForm.celular}
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <FormGroup>
                <Label className="contact-form-text" htmlFor="mensaje">
                  Mensaje
                </Label>
                <Input
                  type="textarea"
                  id="mensaje"
                  name="mensaje"
                  value={contactForm.mensaje}
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <div className="btn-contact-form">
              <Button
                type="submit"
                size="lg"
                style={styleBtnProduct}
                //   onClick={handleSubmit}
              >
                Enviar mensaje
              </Button>
            </div>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Contacto;
