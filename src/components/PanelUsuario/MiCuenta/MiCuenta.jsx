import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import DatosCuenta from "./DatosCuenta";
import "./MiCuenta.scss";
import Loader from "../../Loader/Loader";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";

const MiCuenta = () => {
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
      <Imgcab nombrehead="Mi cuenta" />
      {Object.entries(usuario).length > 0 ? (
        <div className="container micuenta-container">
          <PanelUsuario />
          <div className="container-datos-mi-cuenta">
            <DatosCuenta usuario={usuario} />
          </div>
        </div>
      ) : (
        <div className="d-flex micuenta-container justify-content-center align-items-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default MiCuenta;
