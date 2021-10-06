import Swal from "sweetalert2";
import { types } from "../types/types";
import { loadProducts } from "../helpers/loadProducts";
import { loadCategories } from "../helpers/loadCategories";
// import { db } from "../firebase/firebase-config";
// import { collection, addDoc, deleteDoc } from "firebase/firestore";
// import { writeBatch, doc } from "firebase/firestore";
// import { fileUpload } from "../helpers/fileUpload";
// import { fileUpload } from "../components/helpers/fileUpload";

// export const startNewProduct = () => {
//   return async (dispatch) => {
//     const newProduct = {
//       nombre: "",
//       precio: 0,
//       descripcion: "",
//       bocados: 0,
//       categoria: {
//         nombre: "",
//         envoltura: [],
//       },
//     };

//     const productsRef = collection(db, "products");

//     const docRef = await addDoc(productsRef, newProduct);

//     dispatch(addNewProduct(docRef.id, newProduct));
//   };
// };

export const activeProduct = (id, product) => ({
  type: types.productsActive,
  payload: {
    id,
    ...product,
  },
});

// export const addNewProduct = (id, product) => ({
//   type: types.productsAddNew,
//   payload: {
//     id,
//     ...product,
//   },
// });

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

// export const startSaveProduct = (product) => {
//   return async (dispatch) => {
//     if (!product.url) {
//       delete product.url;
//     }

//     const productToFirestore = { ...product };
//     delete productToFirestore.id;

//     const batch = writeBatch(db);
//     const productRef = doc(db, "products", `${product.id}`);
//     batch.update(productRef, productToFirestore);
//     await batch.commit();

//     dispatch(refreshProduct(product.id, productToFirestore));
//     Swal.fire("Saved", product.nombre, "success");
//   };
// };

// export const refreshProduct = (id, product) => ({
//   type: types.productsUpdated,
//   payload: {
//     id,
//     product: {
//       id,
//       ...product,
//     },
//   },
// });

// export const startUploading = (file) => {
//   return async (dispatch, getState) => {
//     const { active: activeProduct } = getState().products;

//     Swal.fire({
//       title: "Uploading...",
//       text: "Please wait...",
//       allowOutsideClick: false,
//       onBeforeOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     const fileUrl = await fileUpload(file);
//     activeProduct.url = fileUrl;

//     dispatch(startSaveProduct(activeProduct));

//     Swal.close();
//   };
// };

// export const startDeleting = (id) => {
//   return async (dispatch) => {
//     await deleteDoc(doc(db, "products", `${id}`));
//     dispatch(deleteProduct(id));
//   };
// };

// export const deleteProduct = (id) => ({
//   type: types.productsDelete,
//   payload: id,
// });

export const startAddToCart = (product, cantidad, envoltura, categoria) => {
  return (dispatch, getState) => {
    const { cart } = getState().products;
    const exists = cart.filter(
      (item) => item.id === product.id && item.envoltura === envoltura
    );

    // Si el producto existe en el carrito, actualiza la cantidad.
    if (exists.length > 0) {
      if (exists[0].envoltura === envoltura) {
        console.log("olas");
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
        console.log(aux);
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
