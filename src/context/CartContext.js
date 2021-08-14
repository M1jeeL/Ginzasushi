import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const url = "http://3.233.87.147:5002/productos";

  useEffect(() => {
    fetch(url, {
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
  }, []);

  const [selectProduct, setSelectProduct] = useState(null);

  // Add to cart.
  const addToCart = (product, cantidad) => {
    // Check if product is already in the cart.
    let exists = cart.filter((item) => item.id === product.id);

    // If exists update quantity
    if (exists.length > 0) {
      // Identificar la posición del producto añadido dentro del carrito
      let aux = cart.findIndex((item) => item.id === product.id);
      // Crear un carrito auxiliar con los mismos datos del anterior
      let cartAux = [...cart];
      // Crear Producto auxiliar
      let productAux = { ...cartAux[aux] };
      // Sumamos la cantidad anterior más la que se agrega
      productAux.cantidad += cantidad;
      // Se reemplaza el producto del carrito original por el producto auxiliar para actualizar el valor de la cantidad
      cartAux[aux] = productAux;
      // Reemplazar carrito anterior por el auxiliar.
      setCart(cartAux);
      return;
    }

    // Si el producto no está en el carrito, agregarlo.
    const formattedProduct = {
      id: product.id,
      nombre: product.nombre,
      precio: parseInt(product.precio),
      categoria: product.categoria,
      ingredientes: product.ingredientes,
      cantidad: cantidad,
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
        let newCart = cart.filter((producto) => producto.id !== id);
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
    let aux = cart.findIndex((item) => item.id === product.id);
    let cartAux = [...cart];
    let productAux = { ...cartAux[aux] };
    productAux.cantidad += 1;
    cartAux[aux] = productAux;
    setCart(cartAux);
  };

  const removeQuantityForEach = (product) => {
    let aux = cart.findIndex((item) => item.id === product.id);
    if (product.cantidad === 1) {
      return;
    } else {
      let cartAux = [...cart];
      let productAux = { ...cartAux[aux] };
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
