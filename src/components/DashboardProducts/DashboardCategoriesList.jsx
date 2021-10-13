import React from "react";
import { Button } from "reactstrap";

export const DashboardCategoriesList = ({ categories }) => {
  return (
    <div className="dashboard-categories-list-container">
      <div className="dashboard-categories-btn-add">
        <Button>+ Nueva Categor&iacute;a</Button>
      </div>
      <div className="dashboard-categories-list">
        {categories.map((item) => (
          <div key={item.id} className="dashboard-categories-list-item">
            {item.nombre}
          </div>
        ))}
      </div>
    </div>
  );
};
