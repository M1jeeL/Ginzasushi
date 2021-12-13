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
import "./DashboardNewProductModal.scss";

const initialFormCrud = {
  nombre: "",
  precio: 0,
  categoria: "",
  descripcion: "",
  bocados: 0,
  _id: 0,
};

export const DashboardNewProductModal = ({
  activeProduct,
  setActiveProduct,
  openProductModal,
  setOpenProductModal,
  openModalProduct,
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
    if (activeProduct) {
      setFormCrud(activeProduct);
    } else {
      setFormCrud(initialFormCrud);
    }
  }, [activeProduct]);

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

    const [categorySelected] = categories.filter(
      (category) => category._id === formCrud.categoria
    );

    const formAEnviar = {
      nombre: formCrud.nombre,
      precio: formCrud.precio,
      categoria: categorySelected.nombre,
      descripcion: formCrud.descripcion,
      bocados: formCrud.bocados,
    };

    if (formCrud._id === 0) {
      dispatch(startNewProduct(formAEnviar, file));
    } else {
      dispatch(startUpdatingProduct(formAEnviar, file, formCrud._id));
    }
    setOpenProductModal(false);
    handleReset();
  };

  const handleReset = () => {
    setFormCrud(initialFormCrud);
    setActiveProduct(null);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const btnCloseForm = {
    outline: "none",
    backgroundColor: "#ffba00",
    border: "none",
    boxShadow: "none",
  };

  return (
    <Modal isOpen={openProductModal} toggle={openModalProduct}>
      <ModalHeader className="header-crud-form">
        <div className="titulo-form-crud ">
          {activeProduct ? "Editar Producto" : "Agregar Producto"}
        </div>
        <div className="btn-cerrar-form-modal">
          <Button
            style={btnCloseForm}
            color="secondary"
            onClick={openModalProduct}
          >
            <i className="far fa-times-circle fa-3x"></i>
          </Button>
        </div>
      </ModalHeader>
      <ModalBody>
        <FormGroup onSubmit={handleSubmit} className="form-modal-product">
          <Label htmlFor="nombre">Nombre Producto</Label>
          <Input
            type="text"
            name="nombre"
            placeholder="Ingrese nombre"
            autoComplete="off"
            onChange={handleChange}
            value={formCrud.nombre}
          />
          <Label htmlFor="categoria">Categor&iacute;a</Label>
          <Input
            type="select"
            name="categoria"
            autoComplete="off"
            value={formCrud.categoria}
            onChange={handleChange}
          >
            {" "}
            <option value="" disabled>
              Seleccione una categor&iacute;a
            </option>
            {categories?.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.nombre}
              </option>
            ))}
          </Input>
          <Label htmlFor="nombre">Cantidad de bocados</Label>
          <Input
            type="text"
            name="bocados"
            autoComplete="off"
            placeholder="Ingrese bocados"
            onChange={handleChange}
            value={formCrud.bocados}
          />
          <Label htmlFor="precio">Precio</Label>
          <Input
            type="number"
            name="precio"
            autoComplete="off"
            placeholder="Ingrese precio"
            onChange={handleChange}
            value={formCrud.precio}
          />
          <Label htmlFor="descripcion">Ingredientes</Label>
          <Input
            type="textarea"
            name="descripcion"
            autoComplete="off"
            placeholder="Ingrese ingredientes"
            onChange={handleChange}
            value={formCrud.descripcion}
          />
          <Button onClick={handlePictureClick}>Subir im&aacute;gen</Button>
          <Input
            id="fileSelector"
            type="file"
            name="image"
            style={{ display: "none" }}
            onChange={handleFile}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          type="submit"
          value={activeProduct ? "Guardar" : "Agregar"}
          onClick={handleSubmit}
          className="dashboard-modal-btn"
        >
          {activeProduct ? "Guardar" : "Agregar"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
