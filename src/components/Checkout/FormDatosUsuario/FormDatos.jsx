import React from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { startUpdateUser } from "../../../actions/auth";

const FormDespacho = ({
  formDataCliente,
  handleInputChangeData,
  handleShowData,
  isLogged,
}) => {
  const dispatch = useDispatch();
  const erCelular = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;

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

    if (isLogged) {
      const datosCliente = {
        nombre: formDataCliente.nombre,
        apellido: formDataCliente.apellido,
        celular: formDataCliente.celular,
      };
      dispatch(startUpdateUser(datosCliente));
      handleShowData();
    } else {
      handleShowData();
    }
  };
  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    width: "12rem",
    height: "3rem",
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row form>
        <Col lg={12} md={12} sm={12}>
          <FormGroup>
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              type="text"
              id="nombre"
              autoComplete="off"
              name="nombre"
              value={formDataCliente.nombre}
              required
              onChange={handleInputChangeData}
            />
          </FormGroup>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <FormGroup>
            <Label htmlFor="apellido">Apellido</Label>
            <Input
              type="text"
              id="apellido"
              autoComplete="off"
              name="apellido"
              value={formDataCliente.apellido}
              required
              onChange={handleInputChangeData}
            />
          </FormGroup>
        </Col>
        {!isLogged && (
          <Col lg={12} md={12} sm={12}>
            <FormGroup>
              <Label htmlFor="email">Correo</Label>
              <Input
                type="text"
                id="email"
                autoComplete="off"
                name="email"
                value={formDataCliente.email}
                required
                onChange={handleInputChangeData}
              />
            </FormGroup>
          </Col>
        )}
        <Col lg={12} md={12} sm={12}>
          <FormGroup>
            <Label htmlFor="celular">Celular</Label>
            <Input
              type="tel"
              id="celular"
              autoComplete="off"
              name="celular"
              value={formDataCliente.celular}
              placeholder="ej: 987654321"
              required
              onChange={(e) => {
                handleInputChangeData(e);
                validarCelular(e);
              }}
            />
          </FormGroup>
        </Col>
      </Row>
      <div className="checkout-card-btn-container">
        <Button
          className="btn-cancel-save-data-checkout"
          style={styleBtnProduct}
          onClick={handleShowData}
        >
          Cancelar
        </Button>
        <Button
          className="btn-confirm-save-data-checkout"
          style={styleBtnProduct}
          type="submit"
        >
          Guardar
        </Button>
      </div>
    </Form>
  );
};

export default FormDespacho;
