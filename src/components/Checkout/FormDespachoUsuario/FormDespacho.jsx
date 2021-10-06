import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startUpdateUser } from "../../../actions/auth";
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
  handleInputChangeDespacho,
  handleShowDespacho,
  isLogged,
}) => {
  const { comunas } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogged) {
      const dataDespacho = {
        calle: formDespachoCliente.calle,
        numeracion: formDespachoCliente.numeracion,
        depto: formDespachoCliente.depto,
        comuna: formDespachoCliente.comuna,
      };

      dispatch(startUpdateUser(dataDespacho));
      handleShowDespacho();
    } else {
      handleShowDespacho();
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
                autoComplete="off"
                onChange={handleInputChangeDespacho}
              />
            </FormGroup>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <FormGroup>
              <Label htmlFor="numeracion">Numeraci&oacute;n</Label>
              <Input
                type="text"
                id="numeracion"
                autoComplete="off"
                name="numeracion"
                value={formDespachoCliente.numeracion}
                required
                onChange={handleInputChangeDespacho}
              />
            </FormGroup>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <FormGroup>
              <Label htmlFor="depto">Depto (opcional)</Label>
              <Input
                type="text"
                id="depto"
                autoComplete="off"
                name="depto"
                value={formDespachoCliente.depto}
                onChange={handleInputChangeDespacho}
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
                onChange={handleInputChangeDespacho}
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
                  onChange={handleInputChangeDespacho}
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
                  onChange={handleInputChangeDespacho}
                />
              </div>
            </FormGroup>
          </Col>

          <Col lg={12} md={12} sm={12}>
            <FormGroup>
              <Label htmlFor="notas">Instrucciones de entrega</Label>
              <Input
                type="textarea"
                id="notas"
                autoComplete="off"
                name="notas"
                value={formDespachoCliente.notas}
                onChange={handleInputChangeDespacho}
              />
            </FormGroup>
          </Col>
          <Button
            className="btn-confirm-save-data-checkout"
            style={styleBtnProduct}
            onClick={handleShowDespacho}
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
        </Row>
      </Form>
    </>
  );
};

export default FormDespacho;
