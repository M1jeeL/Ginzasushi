const url = process.env.REACT_APP_PRODUCTOS_API;

export const loadCategories = async () => {
  const res = await fetch(`${url}/categorias`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const categories = res.json();

  return categories;
};
