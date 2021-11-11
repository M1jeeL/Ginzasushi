const url = process.env.REACT_APP_PEDIDOS_API;

export const loadPedidosUser = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${url}/pedidos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const pedidos = res.json();

  return pedidos;
};
