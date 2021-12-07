const url = process.env.REACT_APP_API;

export const loadEmployees = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${url}/auth/employees`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const pedidos = res.json();

  return pedidos;
};