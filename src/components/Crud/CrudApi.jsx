import React, { useState, useEffect } from "react";
import CrudTable from "./CrudTable";
import { helpHttp } from "../../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";
import CrudFormModal from "./CrudFormModal";
import { Button } from "reactstrap";
import axios from "axios";


export default function Crud() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/productos";

  const openModal = (e) => {
    setOpenProductModal(!openProductModal);
  };

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        // console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);
// console.log(db)
  const createData = async (data) => {
    delete data.id
    // // console.log(data);

    // let options = {
    //   body: data,
    //   headers: { "content-type": "application/json" },
    // };
    // api.post(url, options).then((res) => {
    //   // console.log(res);
    //   if (!res.err) {
    //     setDb([...db, res]);
    //   } else {
    //     setError(res);
    //   }
    // });

    //////////////////////////////////////////////////

    await axios({
      
    })
   
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el producto con la id: ${id}?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };
  return (
    <div>
      <h2>Inventario de Productos</h2>
      <Button color="warning" onClick={() => {  
        openModal()  
        setDataToEdit(null);
        }}>
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
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
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
