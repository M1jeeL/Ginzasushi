import React, { useContext} from "react";
import UserContext from "../../../context/UserContext";
import {
  Button,
  Col,
  CustomInput,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const FormDespacho = ({
  formDespachoCliente,
  setFormDespachoCliente,
  handleFormDespachoCliente,
  id,
  isLogged,
}) => {
  const { obtenerUsuario, comunas } = useContext(UserContext);

  const handleChangeDespachoCliente = (e) => {
    setFormDespachoCliente({
      ...formDespachoCliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogged) {
      const dataDespacho = {
        calle: formDespachoCliente.calle,
        numeracion: formDespachoCliente.numeracion,
        depto: formDespachoCliente.depto,
        comuna: formDespachoCliente.comuna,
      };

      const token = localStorage.getItem("token");
      const url = `http://localhost:5000/usuarios/${id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dataDespacho),
      })
        .then((response) => {
          response.json();
          obtenerUsuario(token);
          handleFormDespachoCliente();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      handleFormDespachoCliente();
    }
  };

  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    width: "12rem",
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col lg={6} md={12} sm={12}>
            <FormGroup>
              <Label htmlFor="calle">Calle</Label>
              <Input
                type="text"
                id="calle"
                name="calle"
                value={formDespachoCliente.calle}
                required
                onChange={handleChangeDespachoCliente}
              />
            </FormGroup>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <FormGroup>
              <Label htmlFor="numeracion">Numeraci&oacute;n</Label>
              <Input
                type="text"
                id="numeracion"
                name="numeracion"
                value={formDespachoCliente.numeracion}
                required
                onChange={handleChangeDespachoCliente}
              />
            </FormGroup>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <FormGroup>
              <Label htmlFor="depto">Depto (opcional)</Label>
              <Input
                type="text"
                id="depto"
                name="depto"
                value={formDespachoCliente.depto}
                onChange={handleChangeDespachoCliente}
              />
            </FormGroup>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <FormGroup>
              <Label htmlFor="comuna">Comuna</Label>
              <Input
                name="comuna"
                id="comuna"
                type="select"
                value={formDespachoCliente.comuna}
                required
                onChange={handleChangeDespachoCliente}
              >
                <option value="" disabled>
                  Seleccione su comuna
                </option>
                {comunas.map((comuna) => (
                  <option key={comuna.codigo} value={comuna.nombre}>
                    {comuna.nombre}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <FormGroup>
              <Label for="exampleCheckbox">Tipo de entrega</Label>
              <div>
                <CustomInput
                  type="radio"
                  id="dejarAfuera"
                  name="tipoEntrega"
                  label="Dejar pedido en la puerta"
                  value="Dejar pedido en la puerta"
                  checked={
                    formDespachoCliente.tipoEntrega ===
                    "Dejar pedido en la puerta"
                  }
                  onChange={handleChangeDespachoCliente}
                />
                <CustomInput
                  type="radio"
                  id="esperarAfuera"
                  name="tipoEntrega"
                  label="Esperar pedido afuera"
                  value="Esperar pedido afuera"
                  checked={
                    formDespachoCliente.tipoEntrega === "Esperar pedido afuera"
                  }
                  onChange={handleChangeDespachoCliente}
                />
              </div>
            </FormGroup>
          </Col>
          {!isLogged && (
            <Col lg={12} md={12} sm={12}>
              <FormGroup>
                <Label htmlFor="notas">Instrucciones de entrega</Label>
                <Input
                  type="text"
                  id="notas"
                  name="notas"
                  value={formDespachoCliente.notas}
                  onChange={handleChangeDespachoCliente}
                />
              </FormGroup>
            </Col>
          )}
          <Button
            className="btn-confirm-save-data-checkout"
            style={styleBtnProduct}
            type="submit"
          >
            Guardar
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default FormDespacho;
