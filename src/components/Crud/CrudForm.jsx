import React, { useState, useEffect } from "react";
import BotonForm from "../BotonForm/BotonForm";
import "./CrudForm.css";

const initialFormCrud = {
  nombreProducto: "",
  categoriaProducto: "",
  precioProducto: 0,
  id: null,
  ingredientesProducto: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
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

  const handleSubmit = e => {
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

  return (
    <div className="crud-form-container">
      <div className="header-crud-form">
        <h3>{dataToEdit ? "Editar Producto" : "Agregar Producto"}</h3>
      </div>
      <div className="linea-cool"></div>
      <form onSubmit={handleSubmit}>
        <div className="body-crud-form">
          <div className="form-title">
            <label className="form-text" htmlFor="nombreProducto">
              Nombre producto
            </label>
            <input
              type="text"
              name="nombreProducto"
              placeholder="Ingrese nombre"
              onChange={handleChange}
              value={formCrud.nombreProducto}
            />
          </div>
          <div className="form-title">
            <label className="form-text" htmlFor="categoriaProducto">
              Categor&iacute;a
            </label>
            <select
              id="categoria"
              name="categoriaProducto"
              defaultValue=""
              value={formCrud.categoriaProducto}
              onChange={handleChange}
            >
              <option value="" disabled>
                Seleccione una categor&iacute;a
              </option>
              <option value="California Rolls">California Rolls</option>
              <option value="Avocado Rolls">Avocado Rolls</option>
            </select>
          </div>
          <div className="form-title">
            <label className="form-text" >
              Precio
            </label>
            <input
              type="number"
              name="precioProducto"
              placeholder="Ingrese precio"
              onChange={handleChange}
              value={formCrud.precioProducto}
            />
          </div>
          <div className="form-title">
            <label className="form-text" htmlFor="ingredientesProducto">
              Ingredientes
            </label>
            <input
              type="textarea"
              name="ingredientesProducto"
              placeholder="Ingrese ingredientes"
              onChange={handleChange}
              value={formCrud.ingredientesProducto}
            />
          </div>
        </div>
        <div className="botones-crud-form">
          <BotonForm type="reset" value="Limpiar" onClick={handleReset} />
          <BotonForm
            type="submit"
            value={dataToEdit ? "Guardar" : "Agregar"}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default CrudForm;
