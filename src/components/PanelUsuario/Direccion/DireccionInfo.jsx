import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";

const DireccionInfo = ({ usuario }) => {
  const { id, comuna, calle, numeracion, depto } = usuario;

  const inicialState = {
    comuna,
    calle,
    numeracion,
    depto,
  };

  const [usuarioState, setUsuarioState] = useState(inicialState);

  const [comunas, setComunas] = useState([]);

  useEffect(() => {
    fetch("https://apis.digital.gob.cl/dpa/regiones/13/comunas")
      .then((response) => response.json())
      .then((comunas) => setComunas(comunas));

    return () => {
      return true;
    };
  }, []);

  const handleChange = (e) => {
    setUsuarioState({
      ...usuarioState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const url = `http://3.233.87.147:5000/usuarios/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(usuarioState),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form className="container datos-direccion" onSubmit={handleSubmit}>
        <h4>Direcci&oacute;n de despacho</h4>
        <Row form>
          <Col lg={6} md={6} sm={12}>
            <FormGroup className="form-title form-comuna">
              <Label className="form-text" htmlFor="comuna">
                Comuna
              </Label>
              <Input
                name="comuna"
                id="comuna"
                type="select"
                value={usuarioState.comuna}
                required
                onChange={handleChange}
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
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <FormGroup className="form-title">
              <Label className="form-text" htmlFor="calle">
                Calle
              </Label>
              <Input
                type="text"
                id="calle"
                name="calle"
                value={usuarioState.calle}
                required
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <FormGroup className="form-title">
              <Label className="form-text" htmlFor="numeracion">
                N&uacute;mero
              </Label>
              <Input
                type="text"
                id="numeracion"
                name="numeracion"
                value={usuarioState.numeracion}
                required
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <FormGroup className="form-title">
              <Label className="form-text" htmlFor="depto">
                Depto (opcional)
              </Label>
              <Input
                type="text"
                id="depto"
                name="depto"
                value={usuarioState.depto}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <div>
          <Button type="submit" color="warning" size="lg">
            Guardar datos
          </Button>
        </div>
      </Form>
    </>
  );
};

export default DireccionInfo;
