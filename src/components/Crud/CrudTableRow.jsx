import React from "react";
import {Button} from 'reactstrap'

const CrudTableRow = ({ el, setDataToEdit, deleteData, openModal }) => {
  let {
    nombreProducto,
    categoriaProducto,
    precioProducto,
    id,
    ingredientesProducto,
  } = el;



  return (
    <tr>
      <td>{nombreProducto}</td>
      <td>{categoriaProducto}</td>
      <td>{precioProducto}</td>
      <td>{id}</td>
      <td>{ingredientesProducto}</td>
      <td>
        <Button
        style={{marginRight:"1rem"}}
        color="success"
          onClick={() => {
            setDataToEdit(el);
            openModal();
          }}
        >
          Editar
        </Button>
        <Button color="danger" onClick={() => deleteData(id)}>Eliminar</Button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
