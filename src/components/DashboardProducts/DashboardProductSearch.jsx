import React, { useCallback, useEffect } from "react";
import { Input } from "reactstrap";
import "./DashboardProductSearch.scss";
import { useForm } from "../../hooks/useForm";

export const DashboardProductSearch = ({ products, setShowProducts }) => {
  const [formValues, handleInputChange] = useForm({
    search: "",
  });

  const { search } = formValues;

  const getProductsByName = useCallback(
    (name = "") => {
      if (name === "") {
        return products;
      }
      name = name.toLowerCase();
      return products.filter(
        (product) =>
          product.nombre.toLowerCase().includes(name) ||
          product.categoria.nombre.toLowerCase().includes(name)
      );
    },
    [products]
  );

  useEffect(() => {
    if (search === "") {
      setShowProducts(products);
    } else {
      setShowProducts(getProductsByName(search));
    }
  }, [getProductsByName, search, setShowProducts, products]);

  return (
    <div className="products-search-container">
      <Input
        type="text"
        className="products-search-input"
        name="search"
        value={search}
        onChange={handleInputChange}
      />
      <i className="fas fa-search fa-2x"></i>
    </div>
  );
};
