import { useDispatch } from "react-redux";
import { startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "react-redux";
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
import "./FormRegister.scss";

const FormRegister = () => {
  const dispatch = useDispatch();
  const { comunas } = useSelector((state) => state.ui);

  // Expresiones regulares
  const erEmail =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const erPassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const erCelular = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;

  const [formValues, handleInputChange] = useForm({
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
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formValues.nombre ||
      !formValues.apellido ||
      !erEmail.test(formValues.email) ||
      !erPassword.test(formValues.password) ||
      !formValues.celular ||
      !formValues.calle ||
      !formValues.numeracion
    ) {
      alert("Datos incompletos");
      return;
    }

    const nuevoUsuario = {
      username: formValues.username,
      nombre: formValues.nombre,
      apellido: formValues.apellido,
      email: formValues.email,
      password: formValues.password,
      celular: formValues.celular,
      calle: formValues.calle,
      numeracion: formValues.numeracion,
      comuna: formValues.comuna,
      depto: formValues.depto,
    };

    dispatch(startRegister(nuevoUsuario));
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
              value={formValues.username}
              autoComplete="off"
              required
              onChange={(e) => {
                handleInputChange(e);
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
              autoComplete="off"
              value={formValues.nombre}
              required
              onChange={(e) => {
                handleInputChange(e);
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
              autoComplete="off"
              name="apellido"
              value={formValues.apellido}
              required
              onChange={(e) => {
                handleInputChange(e);
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
              autoComplete="off"
              name="email"
              value={formValues.email}
              required
              onChange={(e) => {
                handleInputChange(e);
                validarEmail(e);
              }}
            />
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
              value={formValues.password}
              required
              onChange={(e) => {
                handleInputChange(e);
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
            <Label className="form-text" htmlFor="celular">
              Celular
            </Label>
            <Input
              type="tel"
              id="celular"
              name="celular"
              value={formValues.celular}
              placeholder="ej: 987654321"
              autoComplete="off"
              required
              onChange={(e) => {
                handleInputChange(e);
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
              autoComplete="off"
              type="select"
              value={formValues.comuna}
              required
              onChange={handleInputChange}
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
              autoComplete="off"
              name="calle"
              value={formValues.calle}
              required
              onChange={(e) => {
                handleInputChange(e);
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
              autoComplete="off"
              name="numeracion"
              value={formValues.numeracion}
              required
              onChange={(e) => {
                handleInputChange(e);
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
              autoComplete="off"
              name="depto"
              value={formValues.depto}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <div className="footer-form-register">
        <Button type="submit" color="warning" size="lg">
          Crear Cuenta
        </Button>
        <Link to="/login">
          ¿Tienes cuenta? <strong>Inicia sesión</strong>
        </Link>
      </div>
    </Form>
  );
};

export default FormRegister;
