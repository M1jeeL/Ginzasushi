import React from "react";
import "./DashboardProductCard.scss";

export const DashboardProductCard = ({ product, categories, index }) => {
  const { nombre, image_src, categoria, precio, activo } = product;

  const [category] = categories.filter((item) => item.id === categoria);

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
          <span>{category?.nombre}</span>
        </div>

        <div className="dashboard-subinfo">
          <div className="dashboard-info-price">
            <span>$ {precio}</span>
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
