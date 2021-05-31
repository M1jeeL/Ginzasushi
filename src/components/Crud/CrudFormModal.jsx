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
  nombreProducto: "",
  categoriaProducto: "",
  precioProducto: undefined,
  id: null,
  ingredientesProducto: "",
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
      !formCrud.nombreProducto ||
      !formCrud.precioProducto ||
      !formCrud.categoriaProducto ||
      !formCrud.ingredientesProducto
    ) {
      alert("Datos incompletos");
      return;
    }

    if (formCrud.id === null) {
      createData(formCrud);
    } else {
      updateData(formCrud);
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
  };

  return (
    <Modal isOpen={openProductModal === true}>
      <ModalHeader className="header-crud-form">
        <div className="titulo-form-crud">
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
          <Label htmlFor="nombreProducto">Nombre Producto</Label>
          <Input
            type="text"
            name="nombreProducto"
            placeholder="Ingrese nombre"
            onChange={handleChange}
            value={formCrud.nombreProducto}
          />
          <Label htmlFor="categoriaProducto">Categor&iacute;a</Label>
          <Input
            type="select"
            name="categoriaProducto"
            defaultValue=""
            value={formCrud.categoriaProducto}
            onChange={handleChange}
          >
            {" "}
            <option value="" disabled>
              Seleccione una categor&iacute;a
            </option>
            <option value="California Rolls">California Rolls</option>
            <option value="Avocado Rolls">Avocado Rolls</option>
          </Input>
          <Label htmlFor="precioProducto">Precio</Label>
          <Input
            type="number"
            name="precioProducto"
            placeholder="Ingrese precio"
            onChange={handleChange}
            value={formCrud.precioProducto}
          />
          <Label htmlFor="ingredientesProducto">Ingredientes</Label>
          <Input
            type="textarea"
            name="ingredientesProducto"
            placeholder="Ingrese ingredientes"
            onChange={handleChange}
            value={formCrud.ingredientesProducto}
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
