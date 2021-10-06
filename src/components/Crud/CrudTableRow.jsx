import React from "react";
import { Button } from "reactstrap";

const CrudTableRow = ({ el, setDataToEdit, deleteData, openModal }) => {
  const { nombre, categoria, precio, id, descripcion} = el;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{categoria}</td>
      <td>{precio}</td>
      <td>{id}</td>
      <td>{descripcion}</td>
      <td>
        <Button
          style={{ marginRight: "1rem" }}
          color="success"
          onClick={() => {
            setDataToEdit(el);
            openModal();
          }}
        >
          Editar
        </Button>
        <Button color="danger" onClick={() => deleteData(id)}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
