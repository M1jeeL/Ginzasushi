import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import FormDireccionInfo from "./FormDireccionInfo";
import "./Direccion.scss";
import Loader from "../../Loader/Loader";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";

const Direccion = () => {
  const history = useHistory();
//   const [usuario, setUsuario] = useState({});
  const { usuario } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
      return;
    }
  }, [history]);

  return (
    <>
      <Imgcab nombrehead="Mis direcciones" />
      {Object.entries(usuario).length > 0 ? (
        <div className="container direccion-container">
          <PanelUsuario />
          <div className="container-datos-direccion">
            <FormDireccionInfo usuario={usuario} />
          </div>
        </div>
      ) : (
        <div className="d-flex direccion-container justify-content-center align-items-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Direccion;
