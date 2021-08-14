import React, { useContext, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import UserContext from "../../../context/UserContext";

const FormDatosUsuario = ({ nombre, apellido, email, celular, id }) => {
  const { obtenerUsuario } = useContext(UserContext);
  const [activarDataCliente, setActivarDataCliente] = useState(false);
  const erCelular = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
  const initialDataCliente = {
    nombre,
    apellido,
    email,
    celular,
  };
  const [formDataCliente, setFormDataCliente] = useState(initialDataCliente);

  const handleFormDataCliente = () => {
    setActivarDataCliente(!activarDataCliente);
  };

  const handleChangeDataCliente = (e) => {
    setFormDataCliente({
      ...formDataCliente,
      [e.target.name]: e.target.value,
    });
  };
  const validarCelular = (e) => {
    if (e.target.type === "tel") {
      if (erCelular.test(e.target.value)) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const datosCliente = {
      nombre: formDataCliente.nombre,
      apellido: formDataCliente.apellido,
      celular: formDataCliente.celular,
    };
    const token = localStorage.getItem("token");
    const url = `http://3.233.87.147:5000/usuarios/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datosCliente),
    })
      .then((response) => {
        response.json();
        obtenerUsuario(token);
        handleFormDataCliente();
      })
      .catch((error) => {
        console.log(error);
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
      <div className="info-container-checkout">
        <div className="title-info-checkout">
          <div>Datos Personales</div>
          <div
            className="btn-editar-checkout"
            onClick={() => handleFormDataCliente()}
          >
            Editar
          </div>
        </div>
        {activarDataCliente ? (
          <Form onSubmit={handleSubmit}>
            <Row form>
              <Col lg={12} md={12} sm={12}>
                <FormGroup>
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formDataCliente.nombre}
                    required
                    onChange={(e) => {
                      handleChangeDataCliente(e);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col lg={12} md={12} sm={12}>
                <FormGroup>
                  <Label htmlFor="apellido">Apellido</Label>
                  <Input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formDataCliente.apellido}
                    required
                    onChange={(e) => {
                      handleChangeDataCliente(e);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col lg={12} md={12} sm={12}>
                <FormGroup>
                  <Label htmlFor="celular">Celular</Label>
                  <Input
                    type="tel"
                    id="celular"
                    name="celular"
                    value={formDataCliente.celular}
                    placeholder="ej: 987654321"
                    required
                    onChange={(e) => {
                      handleChangeDataCliente(e);
                      validarCelular(e);
                    }}
                  />
                </FormGroup>
              </Col>
              <Button
                className="btn-confirm-save-data-checkout"
                style={styleBtnProduct}
                type="submit"
              >
                Guardar
              </Button>
            </Row>
          </Form>
        ) : (
          <>
            <div className="row-checkout">
              <div className="logo-row-checkout">
                <i className="fas fa-user"></i>
              </div>
              <div className="data-row-checkout">{`${formDataCliente.nombre} ${formDataCliente.apellido}`}</div>
            </div>
            <div className="row-checkout">
              <div className="logo-row-checkout">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="data-row-checkout">{formDataCliente.email}</div>
            </div>
            <div className="row-checkout">
              <div className="logo-row-checkout">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="data-row-checkout">{`+56${formDataCliente.celular}`}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FormDatosUsuario;
