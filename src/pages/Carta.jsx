import React, { useContext } from "react";
import Cards from "../components/Carta/Cards";
import Imgcab from "../components/Imagen cabecera/Imgcab";
import CartContext from "../context/CartContext";
// import { cartInitialState, cartReducer } from "../reducers/cartReducer";

export default function Carta({ selectProduct, setSelectProduct }) {
  const { products } = useContext(CartContext);
  // const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  // const { products } = state

  return (
    <>
      <Imgcab nombrehead="Nuestra Carta" />
      <div className="container">
        <Cards
          productos={products}
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
        />
      </div>
    </>
  );
}
