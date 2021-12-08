import React from "react";
import { formatearNumero } from "../../helpers/formatearNumero";
import "./DashboardProductCard.scss";

export const DashboardProductCard = ({ product, index }) => {
  const { nombre, image_src, precio, activo } = product;

  return (
    <div className="dashboard-container-card">
      <div className="dashboard-container-product-img">
        <img src={image_src} alt={nombre} className="dashboard-product-img" />
      </div>
      <div className="dashboard-product-title">
        <span>
          {index + 1}.- {nombre}
        </span>
      </div>

      <div className="dashboard-container-info">
        <div className="dashboard-info-category">
          <span>{product.categoria.nombre}</span>
        </div>

        <div className="dashboard-subinfo">
          <div className="dashboard-info-price">
            <span>$ {formatearNumero(precio)}</span>
          </div>

          <div
            className={
              activo
                ? "dashboard-info-status active"
                : "dashboard-info-status disabled"
            }
          >
            <span>{activo ? "Activo" : "Inactivo"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
