import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", [])
  const [products, setProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null);
  const url = process.env.REACT_APP_PRODUCTOS_API;


  useEffect(() => {
    
    fetch(`${url}/productos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data));

    return () => {
      return true;
    };
  }, [url]);

  // Add to cart.
  const addToCart = (product, cantidad, envoltura, categoria) => {
    // Check if product is already in the cart.
    const exists = cart.filter((item) => item.id === product.id);

    // Si el producto existe en el carrito, actualiza la cantidad.
    if (exists.length > 0) {
      const aux = cart.findIndex((item) => item.id === product.id);
      const cartAux = [...cart];
      const productAux = { ...cartAux[aux] };

      productAux.cantidad += cantidad;
      cartAux[aux] = productAux;
      setCart(cartAux);
      return;
    }

    // Si el producto no está en el carrito, agregarlo.
    const formattedProduct = {
      id: product.id,
      nombre: product.nombre,
      precio: parseInt(product.precio),
      categoria: categoria,
      ingredientes: product.descripcion,
      cantidad: cantidad,
      envoltura: envoltura,
    };

    setCart([...cart, formattedProduct]);
  };

  const removeFromCart = (id) => {
    Swal.fire({
      title: "¿Quieres eliminar el producto del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Quitar del carrito",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Listo!", "Tu producto fue eliminado del carrito", "success");
        const newCart = cart.filter((producto) => producto.id !== id);
        setCart(newCart);
      }
    });
  };

  const subTotalForEach = (id) => {
    const [item] = cart.filter((item) => item.id === id);
    const subTotal = item.cantidad * item.precio;
    return subTotal;
  };

  const addQuantityForEach = (product) => {
    const aux = cart.findIndex((item) => item.id === product.id);
    const cartAux = [...cart];
    const productAux = { ...cartAux[aux] };
    productAux.cantidad += 1;
    cartAux[aux] = productAux;
    setCart(cartAux);
  };

  const removeQuantityForEach = (product) => {
    const aux = cart.findIndex((item) => item.id === product.id);
    if (product.cantidad === 1) {
      return;
    } else {
      const cartAux = [...cart];
      const productAux = { ...cartAux[aux] };
      productAux.cantidad -= 1;
      cartAux[aux] = productAux;
      setCart(cartAux);
    }
  };

  const removeAllFromCart = () => {
    Swal.fire({
      title: "¿Estás seguro de vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vaciar carrito",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Listo!", "El carrito fue vaciado", "success");
        setCart([]);
      }
    });
  };

  const formatearNumero = (num) => {
    let formattedNum = num;
    formattedNum = formattedNum
      .toString()
      .split("")
      .reverse()
      .join("")
      .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
    formattedNum = formattedNum
      .split("")
      .reverse()
      .join("")
      .replace(/^[.]/, "");
    return formattedNum;
  };

  const data = {
    products,
    cart,
    addToCart,
    removeFromCart,
    selectProduct,
    setSelectProduct,
    subTotalForEach,
    addQuantityForEach,
    removeQuantityForEach,
    removeAllFromCart,
    formatearNumero,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
