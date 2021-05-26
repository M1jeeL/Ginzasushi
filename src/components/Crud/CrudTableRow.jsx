import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
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
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
