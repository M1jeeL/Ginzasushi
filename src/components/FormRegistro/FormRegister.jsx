import React, { useState, useEffect, useContext } from "react";
import "./FormRegister.css";
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

const FormRegister = () => {
  const { registrarUsuario } = useContext(UserContext);

  const erEmail =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const erPassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const erCelular = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;

  const initialRegisterForm = {
    username: "",
    nombre: "",
    apellido: "",
    email: "",
    confirmacion_email: "",
    password: "",
    confirmacion_password: "",
    celular: "",
    comuna: "",
    calle: "",
    numeracion: "",
    depto: "",
  };

  const [formRegister, setFormRegister] = useState(initialRegisterForm); //Estado de tipo objeto para controlar flujo de datos del formulario de registro
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
    //Capturo el cambio de estado en los Input
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };

  const validarDatos = (e) => {
    if (e.target.value.length > 0) {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    } else {
      e.target.classList.remove("is-valid");
      e.target.classList.add("is-invalid");
    }
  };

  const validarEmail = (e) => {
    if (e.target.type === "email") {
      if (erEmail.test(e.target.value)) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
      }
    }
  };

  const confirmarEmail = (e) => {
    if (e.target.value === formRegister.email) {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    } else {
      e.target.classList.remove("is-valid");
      e.target.classList.add("is-invalid");
    }
  };

  const validarPassword = (e) => {
    if (e.target.type === "password") {
      if (erPassword.test(e.target.value)) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
      }
    }
  };

  const confirmarPassword = (e) => {
    if (e.target.value === formRegister.password) {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    } else {
      e.target.classList.remove("is-valid");
      e.target.classList.add("is-invalid");
    }
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
    if (
      !formRegister.nombre ||
      !formRegister.apellido ||
      !erEmail.test(formRegister.email) ||
      formRegister.confirmacion_email !== formRegister.email ||
      !erPassword.test(formRegister.password) ||
      formRegister.confirmacion_password !== formRegister.password ||
      !formRegister.celular ||
      !formRegister.calle ||
      !formRegister.numeracion
    ) {
      alert("Datos incompletos");
      return;
    }

    const nuevoUsuario = {
      username: formRegister.username,
      nombre: formRegister.nombre,
      apellido: formRegister.apellido,
      email: formRegister.email,
      password: formRegister.password,
      celular: formRegister.celular,
      calle: formRegister.calle,
      numeracion: formRegister.numeracion,
      comuna: formRegister.comuna,
      depto: formRegister.depto,
    };

    registrarUsuario(nuevoUsuario);
  };

  return (
    <Form className="container form-register" onSubmit={handleSubmit}>
      <h4>Perfil</h4>
      <Row form>
        <Col lg={4} md={6} sm={12}>
          <FormGroup className="form-title" row>
            <Label className="form-text" htmlFor="username">
              Nombre de usuario
            </Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formRegister.username}
              required
              onChange={(e) => {
                handleChange(e);
                validarDatos(e);
              }}
            />
          </FormGroup>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <FormGroup className="form-title" row>
            <Label className="form-text" htmlFor="nombre">
              Nombre
            </Label>
            <Input
              type="text"
              id="nombre"
              name="nombre"
              value={formRegister.nombre}
              required
              onChange={(e) => {
                handleChange(e);
                validarDatos(e);
              }}
            />
          </FormGroup>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="apellido">
              Apellido
            </Label>
            <Input
              type="text"
              id="apellido"
              name="apellido"
              value={formRegister.apellido}
              required
              onChange={(e) => {
                handleChange(e);
                validarDatos(e);
              }}
            />
          </FormGroup>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="email">
              Correo
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formRegister.email}
              required
              onChange={(e) => {
                handleChange(e);
                validarEmail(e);
              }}
            />
          </FormGroup>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="confirmacion_email">
              Confirmaci&oacute;n de correo
            </Label>
            <Input
              type="email"
              id="confirmacion_email"
              name="confirmacion_email"
              value={formRegister.confirmacionEmail}
              required
              onChange={(e) => {
                handleChange(e);
                confirmarEmail(e);
              }}
            />
            <FormFeedback tooltip>Los correos deben coincidir.</FormFeedback>
          </FormGroup>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="password">
              Contrase&ntilde;a
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formRegister.password}
              required
              onChange={(e) => {
                handleChange(e);
                validarPassword(e);
              }}
            />
            <FormFeedback tooltip>
              La contrase&ntilde;a debe tener m&iacute;nimo 6 c&aacute;racteres
              y m&aacute;ximo 16, adem&aacute;s, debe poseer un n&uacute;mero.
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="confirmacion_password">
              Confirmaci&oacute;n de contrase&ntilde;a
            </Label>
            <Input
              type="password"
              id="confirmacion_password"
              name="confirmacion_password"
              value={formRegister.confirmacionPassword}
              required
              onChange={(e) => {
                handleChange(e);
                confirmarPassword(e);
              }}
            />
            <FormFeedback tooltip>
              Las contrase&ntilde;as deben coincidir.
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="celular">
              Celular
            </Label>
            <Input
              type="tel"
              id="celular"
              name="celular"
              value={formRegister.celular}
              placeholder="ej: 987654321"
              required
              onChange={(e) => {
                handleChange(e);
                validarCelular(e);
              }}
            />
          </FormGroup>
        </Col>
      </Row>

      <h4>Direcci&oacute;n de despacho</h4>

      <Row form>
        <Col lg={4} md={6} sm={12}>
          <FormGroup className="form-title form-comuna">
            <Label className="form-text" htmlFor="comuna">
              Comuna
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
              {comunas.map((comuna) => (
                <option key={comuna.codigo} value={comuna.nombre}>
                  {comuna.nombre}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="calle">
              Calle
            </Label>
            <Input
              type="text"
              id="calle"
              name="calle"
              value={formRegister.calle}
              required
              onChange={(e) => {
                handleChange(e);
                validarDatos(e);
              }}
            />
          </FormGroup>
        </Col>
        <Col lg={2} md={6} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="numeracion">
              N&uacute;mero
            </Label>
            <Input
              type="text"
              id="numeracion"
              name="numeracion"
              value={formRegister.numeracion}
              required
              onChange={(e) => {
                handleChange(e);
                validarDatos(e);
              }}
            />
          </FormGroup>
        </Col>
        <Col lg={2} md={6} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="depto">
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
      <div className="d-flex justify-content-between">
        <Button type="submit" color="warning" size="lg">
          Crear Cuenta
        </Button>
        <Link to="/login" className="align-self-end">
          ¿Tienes cuenta? <strong>Inicia sesión</strong>
        </Link>
      </div>
    </Form>
  );
};

export default FormRegister;
