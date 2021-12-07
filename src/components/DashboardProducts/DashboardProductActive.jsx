import React from "react";
import { useDispatch } from "react-redux";
import {
  startDeleting,
  startToggleStatusProduct,
} from "../../actions/products";

export const DashboardProductActive = ({ activeProduct, openModalProduct }) => {
  const dispatch = useDispatch();
  const { nombre, _id, descripcion, precio } = activeProduct;

  return (
    <div className="dashboard-product-data animate__animated animate__fadeInRight">
      <div className="dashboard-product-data-title">{nombre}</div>
      <div className="dashboard-product-data-body">
        <div className="dashboard-product-data-body-detail">
          Detalles del producto:
        </div>
        <hr />
        <div className="dashboard-product-data-body-id">Id: {_id}</div>
        <div className="dashboard-product-data-body-category">
          Categoria: {activeProduct.categoria.nombre}
        </div>
        <div className="dashboard-product-data-body-price">
          Precio: ${precio}
        </div>
        <hr />
        <div className="dashboard-product-data-body-ingredientes">
          Ingredientes:
        </div>
        <div className="dashboard-product-data-body-ingredientes-info">
          {descripcion}
        </div>
      </div>
      <hr />
      <div className="dashboard-product-data-footer">
        <div
          className="dashboard-product-data-footer-icon pen"
          onClick={openModalProduct}
        >
          <i className="fas fa-pen"></i>
        </div>
        <div
          className="dashboard-product-data-footer-icon trash"
          onClick={() => {
            dispatch(startDeleting(_id));
          }}
        >
          <i className="fas fa-trash"></i>
        </div>
        <div
          className="dashboard-product-data-footer-icon off"
          onClick={() => {
            dispatch(startToggleStatusProduct(activeProduct, _id));
          }}
        >
          <i className="fas fa-power-off"></i>
        </div>
      </div>
    </div>
  );
};
