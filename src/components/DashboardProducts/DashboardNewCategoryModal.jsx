import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { startNewCategory } from "../../actions/products";
import { useForm } from "../../hooks/useForm";

export const DashboardNewCategoryModal = ({
  openCategoryModal,
  openModalCategory,
  activeCategory,
}) => {
  const dispatch = useDispatch();
  const [valuesForm, handleInputChange, reset] = useForm({
    nombre: "",
    envoltura: "",
  });
  const [envolturas, setEnvolturas] = useState([]);

  const btnCloseForm = {
    outline: "none",
    backgroundColor: "#ffba00",
    border: "none",
    boxShadow: "none",
  };

  const addEnvoltura = () => {
    if (valuesForm.envoltura === "") {
      return;
    } else {
      setEnvolturas([...envolturas, valuesForm.envoltura]);
      reset({
        ...valuesForm,
        envoltura: "",
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (envolturas.length > 0) {
      const newCategory = {
        nombre: valuesForm.nombre,
        envoltura: envolturas,
      };

      dispatch(startNewCategory(newCategory));
      reset();
      openModalCategory();
    } else {
      const newCategory = {
        nombre: valuesForm.nombre,
        envoltura: [valuesForm.envoltura],
      };
      dispatch(startNewCategory(newCategory));
      reset();
      openModalCategory();
    }
  };

  return (
    <Modal isOpen={openCategoryModal} toggle={openModalCategory}>
      <ModalHeader className="header-crud-form">
        <div className="titulo-form-crud ">
          {activeCategory ? "Editar Producto" : "Agregar Categoría"}
        </div>
        <div className="btn-cerrar-form-modal">
          <Button
            style={btnCloseForm}
            color="secondary"
            onClick={openModalCategory}
          >
            <i className="far fa-times-circle fa-3x"></i>
          </Button>
        </div>
      </ModalHeader>
      <ModalBody>
        <FormGroup onSubmit={handleSubmit} className="form-modal-product">
          <Label>Nombre Categor&iacute;a</Label>
          <Input
            type="text"
            name="nombre"
            autoComplete="off"
            value={valuesForm.nombre}
            onChange={handleInputChange}
          />
          <Label>Envolturas</Label>
          <Input
            type="text"
            name="envoltura"
            value={valuesForm.envoltura}
            onChange={handleInputChange}
          />
          <Button className="dashboard-modal-btn" onClick={addEnvoltura}>
            A&ntilde;adir otra envoltura
          </Button>
        </FormGroup>
        {envolturas.length > 0 && (
          <>
            <div>Envolturas que se guardar&aacute;n: </div>
            {envolturas.map((envoltura, index) => (
              <div key={index}>
                <div>
                  {index + 1}.- {envoltura}
                </div>
              </div>
            ))}
          </>
        )}
      </ModalBody>
      <ModalFooter>
        <Button
          type="submit"
          value={activeCategory ? "Guardar" : "Agregar"}
          onClick={handleSubmit}
          className="dashboard-modal-btn"
        >
          {activeCategory ? "Guardar" : "Agregar"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
