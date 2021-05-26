import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import nextId from "react-id-generator";

const initialDb = [
  {
    idProducto: 1,
    nombreProducto: "Chikin",
    precioProducto: 2500,
    ingredientesProducto: "Pollo, Queso crema, Palta y Cebollín.",
    categoriaProducto: "California Rolls",
  },
  {
    idProducto: 2,
    nombreProducto: "Ebi",
    precioProducto: 2800,
    ingredientesProducto: "Camarón, Queso crema, Palta y Cebollín.",
    categoriaProducto: "California Rolls",
  },
  {
    idProducto: 3,
    nombreProducto: "Samon",
    precioProducto: 2800,
    ingredientesProducto: "Salmón, Queso crema, Palta y Cebollín.",
    categoriaProducto: "California Rolls",
  },
];

export default function Crud() {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.idProducto = nextId();
    setDb([...db, data]);
    console.log(data);
  };

  const updateData = (data) => {
    let newData = db.map((el) =>
      el.idProducto === data.idProducto ? data : el
    );
    setDb(newData);
  };

  const deleteData = (idProducto) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el producto con la id: ${idProducto}?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.idProducto !== idProducto);
      setDb(newData);
    } else {
      return;
    }
  };
  return (
    <div>
      <h2>Inventario de Productos</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
}
