import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { startNewProduct, startUpdatingProduct } from "../../actions/products";
import "./CrudFormModal.css";

const initialFormCrud = {
  nombre: "",
  precio: 0,
  categoria: "",
  descripcion: "",
  bocados: 0,
  id: 0,
};

const CrudForm = ({
  dataToEdit,
  setDataToEdit,
  openProductModal,
  setOpenProductModal,
  openModal,
}) => {
  const { categories } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [formCrud, setFormCrud] = useState(initialFormCrud);
  const [file, setFile] = useState(null);
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
      !formCrud.descripcion ||
      !formCrud.bocados
    ) {
      alert("Datos incompletos");
      return;
    }

    const formAEnviar = {
      nombre: formCrud.nombre,
      precio: formCrud.precio,
      categoria: formCrud.categoria,
      descripcion: formCrud.descripcion,
      bocados: formCrud.bocados,
    };

    if (formCrud.id === 0) {
      dispatch(startNewProduct(formAEnviar, file));
    } else {
      dispatch(startUpdatingProduct(formAEnviar, file, formCrud.id));
    }
    setOpenProductModal(false);
    handleReset();
  };

  const handleReset = () => {
    setFormCrud(initialFormCrud);
    setDataToEdit(null);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
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
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </Input>
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
          <Label htmlFor="descripcion">Ingredientes</Label>
          <Input
            type="textarea"
            name="descripcion"
            placeholder="Ingrese ingredientes"
            onChange={handleChange}
            value={formCrud.descripcion}
          />
          <Label>Subir im&aacute;gen</Label>
          <Input type="file" name="image" onChange={handleFile} />
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
