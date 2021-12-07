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
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  //   console.log(categories);

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
              key={cat.id}
              onClick={() => {
                setCategorySelected(cat._id);
                setNombreHead(cat.nombre);
              }}
            >
              {cat.nombre}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default FiltroCarta;
