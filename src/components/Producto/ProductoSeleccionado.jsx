import React from 'react';
import Producto from './Producto';

function ProductoSeleccionado (props) {
   

    return(
        <Producto 
        nombreProducto = {props.nombreProducto} 
        precioProducto = {props.precioProducto} 
        envolturaProducto = {props.envolturaProducto} 
        ingredientesProducto = {props.ingredientesProducto}
        />
    )
}

export default ProductoSeleccionado;