import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Imgcab from "../components/Imagen cabecera/Imgcab";
import Producto from "../components/Producto/Producto";
import CartContext from "../context/CartContext";
const Productos = () => {
  const { products } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const query = {
    nombre: params.nombre,
    categoria: params.categoria.split("-"),
  };

  let [selected] = products.filter(
    (item) =>
      item.nombre.toLowerCase() === query.nombre &&
      item.categoria.toLowerCase().split(" ")[1] === query.categoria[1] &&
      item.categoria.toLowerCase().split(" ")[2] === query.categoria[2]
  );

  useEffect(() => {
    if (products.length > 0) {
      if (Object.entries(selected).length > 0) {
        setLoading(false);
      }
    }
  }, [selected, products.length]);
  return (
    <>
      <Imgcab nombrehead="California Rolls" />
      <br></br>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Loader />
        </div>
      ) : (
        <Producto producto={selected} />
      )}
    </>
  );
};

export default Productos;
