const getCategories = async () => {
  const url = process.env.REACT_APP_PRODUCTOS_API;
  const response = await fetch(`${url}/categorias`);
  const data = await response.json();

  const categories = data.map((cat) => {
    return {
      id: cat.id,
      nombre: cat.nombre,
      envoltura: cat.envoltura,
    };
  });

  return categories;
};

export default getCategories