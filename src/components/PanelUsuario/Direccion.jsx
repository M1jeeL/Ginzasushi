import React, { useEffect } from 'react'
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Direccion = () => {
  useEffect(() => {
    if (!cookies.get("email")) {
      window.location.href = "./login";
    }
  }, []);
  
  return (
    <>
      <h1>Mis direcciones</h1>
    </>
  )
}

export default Direccion
