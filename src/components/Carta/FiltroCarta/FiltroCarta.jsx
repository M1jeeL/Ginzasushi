import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const FiltroCarta = ({setCategoria}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret color="warning">Categorias</DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem onClick={() => setCategoria("California Rolls")}>
          California Rolls
          </DropdownItem>
          <DropdownItem onClick={() => setCategoria("Avocado Rolls")}>Avocado Rolls</DropdownItem>
          <DropdownItem onClick={() => setCategoria("Samon Rolls")}>Samon Rolls</DropdownItem>
          <DropdownItem onClick={() => setCategoria("Panko Rolls")}>Panko Rolls</DropdownItem>
          <DropdownItem onClick={() => setCategoria("Cheese Rolls")}>Cheese Rolls</DropdownItem>
          <DropdownItem onClick={() => setCategoria("Futomaki Rolls")}>Futomaki Rolls</DropdownItem>
          <DropdownItem onClick={() => setCategoria("Premium Rolls")}>Premium Rolls</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default FiltroCarta;
