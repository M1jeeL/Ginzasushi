import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "./CrudFormModal.css";

const initialFormCrud = {
  nombre: "",
  precio: 0,
  categoria: "",
  ingredientes: "",
  envoltura: "",
  bocados: 0,
  id: 0,
};

const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
  openProductModal,
  openModal,
}) => {
  const [formCrud, setFormCrud] = useState(initialFormCrud);

  const handleChange = (e) => {
    setFormCrud({
      ...formCrud,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (dataToEdit) {
      setFormCrud(dataToEdit);
    } else {
      setFormCrud(initialFormCrud);
    }
  }, [dataToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Datos requeridos
    if (
      !formCrud.nombre ||
      !formCrud.precio ||
      !formCrud.categoria ||
      !formCrud.ingredientes ||
      !formCrud.envoltura ||
      !formCrud.bocados
    ) {
      alert("Datos incompletos");
      return;
    }

    const formAEnviar = {
      nombre: formCrud.nombre,
      precio: formCrud.precio,
      categoria: formCrud.categoria,
      ingredientes: formCrud.ingredientes,
      envoltura: formCrud.envoltura,
      bocados: formCrud.bocados
    }

    if (formCrud.id === 0) {
      createData(formAEnviar);
    } else {
      updateData(formAEnviar, formCrud.id);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setFormCrud(initialFormCrud);
    setDataToEdit(null);
  };

  const btnCloseForm = {
    outline: "none",
    backgroundColor: "#ffba00",
    border: "none",
    boxShadow: "none",
  };

  return (
    <Modal isOpen={openProductModal} toggle={openModal}>
      <ModalHeader className="header-crud-form">
        <div className="titulo-form-crud ">
          {dataToEdit ? "Editar Producto" : "Agregar Producto"}
        </div>
        <div className="btn-cerrar-form-modal">
          <Button style={btnCloseForm} color="secondary" onClick={openModal}>
            <i className="far fa-times-circle fa-3x"></i>
          </Button>
        </div>
      </ModalHeader>
      <ModalBody>
        <FormGroup onSubmit={handleSubmit}>
          <Label htmlFor="nombre">Nombre Producto</Label>
          <Input
            type="text"
            name="nombre"
            placeholder="Ingrese nombre"
            onChange={handleChange}
            value={formCrud.nombre}
          />
          <Label htmlFor="categoria">Categor&iacute;a</Label>
          <Input
            type="select"
            name="categoria"
            value={formCrud.categoria}
            onChange={handleChange}
          >
            {" "}
            <option value="" disabled>
              Seleccione una categor&iacute;a
            </option>
            <option value="California Rolls">California Rolls</option>
            <option value="Avocado Rolls">Avocado Rolls</option>
          </Input>
          <Label htmlFor="nombre">Envoltura</Label>
          <Input
            type="text"
            name="envoltura"
            placeholder="Ingrese envoltura"
            onChange={handleChange}
            value={formCrud.envoltura}
          />
          <Label htmlFor="nombre">Cantidad de bocados</Label>
          <Input
            type="text"
            name="bocados"
            placeholder="Ingrese bocados"
            onChange={handleChange}
            value={formCrud.bocados}
          />
          <Label htmlFor="precio">Precio</Label>
          <Input
            type="number"
            name="precio"
            placeholder="Ingrese precio"
            onChange={handleChange}
            value={formCrud.precio}
          />
          <Label htmlFor="ingredientes">Ingredientes</Label>
          <Input
            type="textarea"
            name="ingredientes"
            placeholder="Ingrese ingredientes"
            onChange={handleChange}
            value={formCrud.ingredientes}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          type="submit"
          value={dataToEdit ? "Guardar" : "Agregar"}
          onClick={handleSubmit}
        >
          {dataToEdit ? "Guardar" : "Agregar"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CrudForm;
