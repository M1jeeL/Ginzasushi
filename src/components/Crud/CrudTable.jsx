import React from "react";
import CrudTableRow from "./CrudTableRow";
import { Table } from "reactstrap";

const CrudTable = ({ data, setDataToEdit, deleteData, openModal }) => {
  return (
    <div>
      <h3>Productos</h3>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categor&iacute;a</th>
            <th>Precio</th>
            <th>Id</th>
            <th>Ingredientes</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                openModal={openModal}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6">Sin datos</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudTable;
