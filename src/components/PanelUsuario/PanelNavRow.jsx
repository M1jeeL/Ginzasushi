import React from "react";
import { NavLink } from "react-router-dom";

const PanelNavRow = ({ url, title }) => {
  return (
    <NavLink exact to={url} className="panel-nav-item">
      <span>{title}</span>
    </NavLink>
  );
};

export default PanelNavRow;
