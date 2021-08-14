import React, { useContext, useEffect, useState } from "react";
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
import UserContext from "../../../context/UserContext";

const FormDespachoUsuario = ({ calle, comuna, numeracion, depto, id }) => {
  const { obtenerUsuario } = useContext(UserContext);
  const [activarDespachoCliente, setActivarDespachoCliente] = useState(false);
  const [comunas, setComunas] = useState([]);
  const initialDespachoCliente = {
    calle,
    comuna,
    numeracion,
    depto,
    tipoEntrega: "Dejar pedido en la puerta",
  };
  useEffect(() => {
    fetch("https://apis.digital.gob.cl/dpa/regiones/13/comunas")
      .then((response) => response.json())
      .then((comunas) => setComunas(comunas));
  }, []);

  const [formDespachoCliente, setFormDespachoCliente] = useState(
    initialDespachoCliente
  );

  const handleFormDespachoCliente = () => {
    setActivarDespachoCliente(!activarDespachoCliente);
  };

  const handleChangeDespachoCliente = (e) => {
    setFormDespachoCliente({
      ...formDespachoCliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataDespacho = {
      calle: formDespachoCliente.calle,
      numeracion: formDespachoCliente.numeracion,
      depto: formDespachoCliente.depto,
      comuna: formDespachoCliente.comuna,
    };

    const token = localStorage.getItem("token");
    const url = `http://3.233.87.147:5000/usuarios/${id}`;
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
        handleFormDespachoCliente()
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
          <div>Datos de Despacho</div>
          <div
            className="btn-editar-checkout"
            onClick={handleFormDespachoCliente}
          >
            Editar
          </div>
        </div>
        {activarDespachoCliente ? (
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
                      onChange={(e) => {
                        handleChangeDespachoCliente(e);
                      }}
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
                      onChange={(e) => {
                        handleChangeDespachoCliente(e);
                      }}
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
                      onChange={(e) => {
                        handleChangeDespachoCliente(e);
                      }}
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
                          formDespachoCliente.tipoEntrega ===
                          "Esperar pedido afuera"
                        }
                        onChange={handleChangeDespachoCliente}
                      />
                    </div>
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
          </>
        ) : (
          <>
            <div className="row-checkout">
              <div className="logo-row-checkout">
                <i className="fas fa-motorcycle"></i>
              </div>
              <div className="data-row-checkout">Delivery</div>
            </div>
            <div className="row-checkout">
              <div className="logo-row-checkout">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="data-row-checkout">
                Direcci&oacute;n: {calle} {numeracion}, {comuna}
                {depto === "" ? "" : `, ${depto}`}
              </div>
            </div>
            <div className="row-checkout">
              <div className="logo-row-checkout">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="data-row-checkout">
                Indicaciones: {formDespachoCliente.tipoEntrega}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FormDespachoUsuario;
