import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { startDeleting } from "../../actions/products";

const CrudTableRow = ({ el, setDataToEdit, deleteData, openModal }) => {
  const { nombre, categoria, precio, id, descripcion } = el;
  const dispatch = useDispatch();
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
        <Button color="danger" onClick={() => dispatch(startDeleting(id))}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
