import React, { useCallback, useEffect } from "react";
import { Input } from "reactstrap";
import { useForm } from "../../hooks/useForm";

export const DashboardPedidosSearch = ({ pedidos, setPaginatedPedidos }) => {
  const [formValues, handleInputChange] = useForm({
    search: "",
  });

  const { search } = formValues;
  const getPedidosByName = useCallback(
    (name = "") => {
      if (name === "") {
        return pedidos;
      }
      name = name.toLowerCase();
      return pedidos.filter(
        (pedido) =>
          pedido.payer.name.toLowerCase().includes(name) ||
          pedido.payer.surname.toLowerCase().includes(name)
      );
    },
    [pedidos]
  );

  useEffect(() => {
    if (search === "") {
      setPaginatedPedidos(pedidos);
    } else {
      setPaginatedPedidos(getPedidosByName(search));
    }
  }, [getPedidosByName, search, setPaginatedPedidos, pedidos]);

  return (
    <div className="employee-search-container">
      <Input
        type="text"
        className="employee-search-input"
        name="search"
        value={search}
        onChange={handleInputChange}
      />
      <i className="fas fa-search fa-2x"></i>
    </div>
  );
};
