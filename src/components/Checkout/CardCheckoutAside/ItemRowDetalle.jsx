import React from "react";

const ItemRowDetalle = ({ item }) => {
  return (
    <div className="producto">
    <div className="producto-imagen">
      <div>
        <img
          src={item.image_src}
          alt={item.nombre}
          className="producto-imagen-img"
        />
      </div>
    </div>
    <div className="producto-detalles">
      <div className="producto-titulo">
        <p>{item.nombre}</p>
      </div>
      <div className="producto-categoria">
        <p>Categoría: {item.categoria}</p>
      </div>
      <div className="producto-envoltura">
        <p>Envoltura: {item.envoltura}</p>
      </div>
      <div className="producto-cantidad">
        <p>Cantidad: {item.cantidad}</p>
      </div>
      <div className="producto-precio">
        <p>Precio: ${item.precio}</p>
      </div>
    </div>
    <hr className="producto-separador" />
  </div>
  );
};

export default ItemRowDetalle;
