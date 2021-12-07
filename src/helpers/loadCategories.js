const url = process.env.REACT_APP_API;

export const loadCategories = async () => {
  const res = await fetch(`${url}/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const categories = res.json();

  return categories;
};
