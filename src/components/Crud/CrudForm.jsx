import React, { useState, useEffect } from "react";

const initialFormCrud = {
  nombreProducto: "",
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

  return (
    <div>
      <h3>{dataToEdit ? "Editar Producto" : "Agregar Nuevo Producto"}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombreProducto">Nombre producto</label>
        <input
          type="text"
          name="nombreProducto"
          placeholder="Ingrese nombre"
          onChange={handleChange}
          value={formCrud.nombreProducto}
        />
        <label htmlFor="categoriaProducto">Categor&iacute;a</label>
        <select
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
        <label htmlFor="precioProducto">Precio</label>
        <input
          type="number"
          name="precioProducto"
          placeholder="Ingrese precio"
          onChange={handleChange}
          value={formCrud.precioProducto}
        />
        <label htmlFor="ingredientesProducto">Ingredientes</label>
        <input
          type="textarea"
          name="ingredientesProducto"
          placeholder="Ingrese ingredientes"
          onChange={handleChange}
          value={formCrud.ingredientesProducto}
        />

        <input
          type="submit"
          value={dataToEdit ? "Guardar" : "Agregar"}
          onClick={handleSubmit}
        />
        <input type="reset" value="limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
