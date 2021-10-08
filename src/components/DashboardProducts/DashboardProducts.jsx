import React from "react";
import CrudApi from "../Crud/CrudApi";
import { DashboardNavbar } from "../DashboardNavbar/DashboardNavbar";
import "./DashboardProducts.scss";

export const DashboardProducts = () => {
  return (
    <>
      <div className="container-dashboard-products">
        <DashboardNavbar />
        <CrudApi />
      </div>
    </>
  );
};
