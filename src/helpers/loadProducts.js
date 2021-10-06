const url = process.env.REACT_APP_PRODUCTOS_API;

export const loadProducts = async () => {
  const res = await fetch(`${url}/productos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const products = res.json();

  return products;
};
