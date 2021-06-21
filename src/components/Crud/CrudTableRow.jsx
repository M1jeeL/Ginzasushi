import React from "react";
import {Button} from 'reactstrap'

const CrudTableRow = ({ el, setDataToEdit, deleteData, openModal }) => {
  let {
    nombre,
    categoria,
    precio,
    id,
    ingredientes,
  } = el;



  return (
    <tr>
      <td>{nombre}</td>
      <td>{categoria}</td>
      <td>{precio}</td>
      <td>{id}</td>
      <td>{ingredientes}</td>
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
