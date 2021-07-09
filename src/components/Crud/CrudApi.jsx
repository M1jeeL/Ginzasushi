import React, { useState, useEffect } from "react";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import CrudFormModal from "./CrudFormModal";
import { Button } from "reactstrap";

export default function Crud() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);

  const [loading, setLoading] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);

  let url = "http://localhost:5002/productos";

  const openModal = (e) => {
    setOpenProductModal(!openProductModal);
  };

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((productos) => {
        setLoading(false);
        setDb(productos);
      })
  }, [url]);

  const createData = async (data) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => setOpenProductModal(false));
  };

  const updateData = async (data, id) => {
    await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => setOpenProductModal(false));
  };

  const deleteData = async (id) => {
    const confirmacion = window.confirm('¿Está seguro que desea eliminar este producto?')

    if (confirmacion === true) {
      await fetch(`${url}/${id}`, {
        method: "DELETE"
      })
      return;
    } 

  };
  return (
    <div>
      <h2>Inventario de Productos</h2>
      <Button
        color="warning"
        onClick={() => {
          openModal();
          setDataToEdit(null);
        }}
      >
        Agregar Producto
      </Button>
      <CrudFormModal
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        openProductModal={openProductModal}
        openModal={openModal}
      />
      {loading && <Loader />}
      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          openModal={openModal}
        />
      )}
    </div>
  );
}
