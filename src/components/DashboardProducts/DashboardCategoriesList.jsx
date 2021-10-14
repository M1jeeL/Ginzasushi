import React, { useState } from "react";
import { Button } from "reactstrap";
import { DashboardNewCategoryModal } from "./DashboardNewCategoryModal";

export const DashboardCategoriesList = ({ categories }) => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  //   const [activeCategory, setActiveCategory] = useState(null);

  const openModalCategory = () => {
    setOpenCategoryModal(!openCategoryModal);
  };

  return (
    <div className="dashboard-categories-list-container">
      <div className="dashboard-categories-btn-add">
        <Button onClick={openModalCategory}>+ Nueva Categor&iacute;a</Button>
        <DashboardNewCategoryModal
          openCategoryModal={openCategoryModal}
          openModalCategory={openModalCategory}
        />
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
