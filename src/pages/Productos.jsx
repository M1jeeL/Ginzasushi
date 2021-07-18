// import ProductoSeleccionado from "../components/Producto/ProductoSeleccionado";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
// import { TYPES } from "../actions/cartAction";
import Imgcab from "../components/Imagen cabecera/Imgcab";
import Producto from "../components/Producto/Producto";
import CartContext from "../context/CartContext";
// import { cartInitialState, cartReducer } from "../reducers/cartReducer";

const Productos = () => {
  const { products } = useContext(CartContext);
  const [producto, setProducto] = useState([]);
  const params = useParams();

  const query = {
    nombre: params.nombre,
    categoria: params.categoria.split("-"),
  };

  let selected = products.filter(
    (item) =>
      item.nombre.toLowerCase() === query.nombre &&
      item.categoria.toLowerCase().split(" ")[1] === query.categoria[1] &&
      item.categoria.toLowerCase().split(" ")[2] === query.categoria[2]
  );

  if (selected.length > 0) {
    const id = selected[0].id;
    if (producto.length === 0) {
      fetch(`http://3.233.87.147:5002/productos/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setProducto(data));
    }
  }

  return (
    <>
      <Imgcab nombrehead="California Rolls" />
      <br></br>
      <Producto producto={producto}/>
    </>
  );
};

export default Productos;
