import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const FiltroCarta = ({
  categories,
  setCategorySelected,
  setNombreHead,
  mostrarTodo,
//   setFilterPerPrice,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
//   const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret color="warning">
          Categorias
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem
            onClick={() => {
              mostrarTodo();
              setNombreHead("Nuestra Carta");
            }}
          >
            Mostrar todo
          </DropdownItem>
          {categories.map((cat) => (
            <DropdownItem
              key={cat._id}
              onClick={() => {
                setCategorySelected(cat.nombre);
                setNombreHead(cat.nombre);
              }}
            >
              {cat.nombre}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      {/* <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
        <DropdownToggle caret color="warning">
          Ordenar por precio
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem
            onClick={() => {
              setFilterPerPrice("");
            }}
          >
            No filtrar
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              console.log("menor");
              setFilterPerPrice("menor");
            }}
          >
            Menor a mayor
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              setFilterPerPrice("mayor");
            }}
          >
            Mayor a menor
          </DropdownItem>
        </DropdownMenu>
      </Dropdown> */}
    </>
  );
};

export default FiltroCarta;
