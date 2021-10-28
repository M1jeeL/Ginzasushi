import Swal from "sweetalert2";
import { types } from "../types/types";
import { loadProducts } from "../helpers/loadProducts";
import { loadCategories } from "../helpers/loadCategories";
import { fileUpload } from "../helpers/fileUpload";

const url = process.env.REACT_APP_PRODUCTOS_API;

export const startNewProduct = (newProduct, file) => {
  return async (dispatch) => {
    if (file) {
      const fileUrl = await fileUpload(file);

      newProduct.image_src = fileUrl;
    }

    const token = localStorage.getItem("token");

    await fetch(`${url}/productos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => {
        if (response.ok) {
          // dispatch(addNewProduct(newProduct));
          return response.json();
        } else {
          throw new Error("No esta autorizado para realizar esta acción");
        }
      })
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El producto fue subido con éxito!",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(addNewProduct(data));
      })
      .catch((err) => alert(err));
  };
};

export const startNewCategory = (newCategory) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await fetch(`${url}/categorias`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newCategory),
    })
      .then((response) => {
        if (response.ok) {
          // dispatch(addNewProduct(newProduct));
          return response.json();
        } else {
          throw new Error("No esta autorizado para realizar esta acción");
        }
      })
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "La categoría fue subida con éxito!",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(addNewCategory(data));
      })
      .catch((err) => alert(err));
  };
};

export const addNewProduct = (product) => ({
  type: types.productsAddNew,
  payload: {
    ...product,
  },
});

export const addNewCategory = (category) => ({
  type: types.categoriesAddNew,
  payload: {
    ...category,
  },
});

export const activeProduct = (id, product) => ({
  type: types.productsActive,
  payload: {
    id,
    ...product,
  },
});

export const startLoadingProducts = () => {
  return async (dispatch) => {
    const products = await loadProducts();
    dispatch(setProducts(products));
  };
};

export const setProducts = (products) => ({
  type: types.productsLoad,
  payload: products,
});

export const startLoadingCategories = () => {
  return async (dispatch) => {
    const categories = await loadCategories();
    dispatch(setCategories(categories));
  };
};

export const setCategories = (categories) => ({
  type: types.categoriesLoad,
  payload: categories,
});

export const startUpdatingProduct = (product, file, id) => {
  return async (dispatch) => {
    if (file) {
      const fileUrl = await fileUpload(file);

      product.image_src = fileUrl;
    }

    const token = localStorage.getItem("token");

    await fetch(`${url}/productos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("No esta autorizado para realizar esta acción");
        }
      })
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El producto fue actualizado con éxito!",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(refreshProduct(data.id, data));
      })
      .catch((err) => alert(err));
  };
};

export const startToggleStatusProduct = (product, id) => {
  return async (dispatch) => {
    const { activo } = product;
    Swal.fire({
      title: "¿Estás seguro?",
      text: activo
        ? "El producto se inhabilitará en la carta"
        : "El producto se habilitará en la carta",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: activo ? "Desactivar" : "Activar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");

        await fetch(`${url}/productos/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            activo: !activo,
          }),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("No esta autorizado para realizar esta acción");
            }
          })
          .then((data) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "El producto fue actualizado con éxito!",
              showConfirmButton: false,
              timer: 1500,
            });
            dispatch(refreshProduct(data.id, data));
          })
          .catch((err) => alert(err));
      }
    });
  };
};

export const refreshProduct = (id, product) => ({
  type: types.productsUpdated,
  payload: {
    id,
    product: {
      id,
      ...product,
    },
  },
});

export const startDeleting = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    Swal.fire({
      title: "¿Estás seguro?",
      text: "El producto se eliminará",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${url}/productos/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              Swal.fire("Listo!", "El producto fue eliminado", "success");
              dispatch(deleteProduct(id));
            } else {
              throw new Error("No esta autorizado para realizar esta acción");
            }
          })
          .catch((err) => alert(err));
      }
    });
  };
};

export const deleteProduct = (id) => ({
  type: types.productsDelete,
  payload: id,
});

export const startAddToCart = (product, cantidad, envoltura, categoria) => {
  return (dispatch, getState) => {
    const { cart } = getState().products;
    const exists = cart.filter(
      (item) => item.id === product.id && item.envoltura === envoltura
    );

    // Si el producto existe en el carrito, actualiza la cantidad.
    if (exists.length > 0) {
      if (exists[0].envoltura === envoltura) {
        const aux = cart.findIndex(
          (item) => item.id === product.id && item.envoltura === envoltura
        );
        const cartAux = [...cart];
        const productAux = { ...cartAux[aux] };

        productAux.cantidad += cantidad;
        productAux.subTotal = productAux.cantidad * productAux.precio;
        cartAux[aux] = productAux;

        dispatch(addToCart(cartAux));
        dispatch(calculateTotal());
        return;
      }
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
      image_src: product.image_src,
      subTotal: parseInt(product.precio),
    };
    dispatch(addToCart([...cart, formattedProduct]));
    dispatch(calculateTotal());
  };
};

export const addToCart = (cart) => ({
  type: types.addToCart,
  payload: cart,
});

export const startRemoveOneFromCart = (index) => {
  return async (dispatch, getState) => {
    const { cart } = getState().products;
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
        const aux = [...cart];
        aux.splice(index, 1);
        Swal.fire("Listo!", "Tu producto fue eliminado del carrito", "success");
        dispatch(removeOneFromCart([...aux]));
        dispatch(calculateTotal());
      }
    });
  };
};

export const removeOneFromCart = (newCart) => ({
  type: types.removeOneFromCart,
  payload: newCart,
});

export const startAddQuantityForEach = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState().products;
    const aux = cart.findIndex(
      (item) => item.id === product.id && item.envoltura === product.envoltura
    );
    const cartAux = [...cart];
    const productAux = { ...cartAux[aux] };
    productAux.cantidad += 1;
    cartAux[aux] = productAux;

    dispatch(addQuantityForEach(cartAux));
    dispatch(calculateTotal());
  };
};

export const addQuantityForEach = (newCart) => ({
  type: types.addQuantityForEach,
  payload: newCart,
});

export const startRemoveQuantityForEach = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState().products;
    const aux = cart.findIndex(
      (item) => item.id === product.id && item.envoltura === product.envoltura
    );
    const cartAux = [...cart];
    const productAux = { ...cartAux[aux] };
    productAux.cantidad -= 1;
    cartAux[aux] = productAux;

    dispatch(removeQuantityForEach(cartAux));
    dispatch(calculateTotal());
  };
};

export const removeQuantityForEach = (newCart) => ({
  type: types.removeQuantityForEach,
  payload: newCart,
});

export const startRemoveAllFromCart = () => {
  return (dispatch) => {
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
        dispatch(removeAllFromCart());
        dispatch(calculateTotal());
      }
    });
  };
};

export const removeAllFromCart = () => ({
  type: types.removeAllFromCart,
});

export const calculateTotal = () => ({
  type: types.calculateTotal,
});
