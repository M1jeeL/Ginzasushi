import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import "./Checkout.css";
import Imgcab from "../../components/Imagen cabecera/Imgcab";
import CartContext from "../../context/CartContext";

const Checkout = () => {
  const { cart, subTotalForEach } = useContext(CartContext);

  const [formDataCliente, setFormDataCliente] = useState({
    nombre: "Miguel",
    apellido: "Loza",
    email: "miguelloza1@hotmail.com",
    celular: "979846278",
  });

  const [activarDataCliente, setActivarDataCliente] = useState(false);

  const handleFormDataCliente = () => {
    setActivarDataCliente(!activarDataCliente);
  };

  const handleChangeDataCliente = (e) => {
    setFormDataCliente({
      ...formDataCliente,
      [e.target.name]: e.target.value,
    });
  };

  let subTotal = 0;
  cart.forEach((item) => {
    subTotal = subTotal + subTotalForEach(item.id);
  });

  let despacho = 3000;

  let total = subTotal + despacho;

  subTotal = subTotal
    .toString()
    .split("")
    .reverse()
    .join("")
    .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
  subTotal = subTotal.split("").reverse().join("").replace(/^[.]/, "");

  despacho = despacho
    .toString()
    .split("")
    .reverse()
    .join("")
    .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
  despacho = despacho.split("").reverse().join("").replace(/^[.]/, "");

  total = total
    .toString()
    .split("")
    .reverse()
    .join("")
    .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
  total = total.split("").reverse().join("").replace(/^[.]/, "");

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

  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    width: "12rem",
  };

  return (
    <>
      <Imgcab nombrehead="Checkout" />
      <div className="container checkout">
        <div className="left-side-checkout">
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
              <Form>
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
                  <Button className="btn-confirm-save-data-checkout" style={styleBtnProduct} type="submit" >
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
                  <div className="data-row-checkout">
                    {formDataCliente.email}
                  </div>
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
          <div className="info-container-checkout">
            <div className="title-info-checkout">
              <div>Datos de Despacho</div>
              <div
                className="btn-editar-checkout"
                onClick={() => console.log("ola")}
              >
                Editar
              </div>
            </div>
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
                Direcci&oacute;n: Mamiña 161
              </div>
            </div>
            <div className="row-checkout">
              <div className="logo-row-checkout">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="data-row-checkout">
                Indicaciones: Dejar pedido en la puerta
              </div>
            </div>
          </div>
        </div>
        <div className="aside-container-checkout">
          <div className="aside-info-checkout">
            <div className="aside-confirmacion-checkout">
              Confirmaci&oacute;n de pedido
            </div>
            <div className="aside-precio-checkout">
              <div className="row-aside-checkout">
                <div className="precio-checkout-label">Subtotal</div>
                <div className="precio-checkout-price">$ {subTotal}</div>
              </div>
              <div className="row-aside-checkout">
                <div className="precio-checkout-label">Despacho</div>
                <div className="precio-checkout-price">$ {despacho}</div>
              </div>
              <div className="row-aside-checkout">
                <div className="precio-checkout-label">
                  <strong>Total</strong>
                </div>
                <div className="precio-checkout-price">$ {total}</div>
              </div>
            </div>
            <div className="btn-pagar-pedido">
              <Link to="/checkout">
                <Button style={styleBtnProduct}>Pagar mi pedido</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
