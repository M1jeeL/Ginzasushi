import React, { useState } from "react";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import CrudFormModal from "./CrudFormModal";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

const CrudApi = () => {
  const auth = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);
  const [dataToEdit, setDataToEdit] = useState(null);

  const [openProductModal, setOpenProductModal] = useState(false);

  const openModal = (e) => {
    setOpenProductModal(!openProductModal);
  };

  return (
    <>
      {Object.entries(auth).length > 0 ? (
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
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            openProductModal={openProductModal}
            setOpenProductModal={setOpenProductModal}
            openModal={openModal}
          />
          <CrudTable
            data={products}
            setDataToEdit={setDataToEdit}
            openModal={openModal}
          />
        </div>
      ) : (
        <div className="d-flex direccion-container justify-content-center align-items-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default CrudApi;
