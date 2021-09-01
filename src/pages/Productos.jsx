import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Imgcab from "../components/Imagen cabecera/Imgcab";
import Producto from "../components/Producto/Producto";
import CartContext from "../context/CartContext";
import useFetchCategories from "../hooks/useFetchCategories";
const Productos = () => {
  const { products } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { data: categories } = useFetchCategories();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    if (products.length > 0 && categories.length > 0) {
      let [product] = products.filter((item) => item.id === Number(id));
      let [category] = categories.filter(
        (cat) => product.categoria === cat.id
      );
      setProducto({
          product, category
      })
      setLoading(false)
    }
  }, [categories, id, products]);

  return (
    <>
      <Imgcab nombrehead="California Rolls" />
      <br></br>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Loader />
        </div>
      ) : (
        <Producto producto={producto} />
      )}
    </>
  );
};

export default Productos;
