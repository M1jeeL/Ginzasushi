import React from "react";
import { DashboardProductCard } from "./DashboardProductCard";

export const DashboardProductsList = ({products, categories, handleActiveProduct}) => {
  return (
    <div className="dashboard-products-list">
      {products.map((product, index) => (
        <div
          key={product.id}
          onClick={() => {
            handleActiveProduct(product);
          }}
        >
          <DashboardProductCard
            index={index}
            product={product}
            categories={categories}
          />
        </div>
      ))}
    </div>
  );
};
