import React, { useEffect } from 'react'
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Pedidos = () => {
  useEffect(() => {
    if (!cookies.get("email")) {
      window.location.href = "./login";
    }
  }, []);
  
  return (
    <>
      <h1>Mis pedidos</h1>
    </>
  )
}

export default Pedidos
