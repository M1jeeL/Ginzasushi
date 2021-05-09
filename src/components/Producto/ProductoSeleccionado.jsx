import React, { useState } from 'react';
import Producto from './Producto';

function ProductoSeleccionado () {
    const [producto, setproducto] = useState(
        {
            nombreProducto: 'Chikin',
            precioProducto: '2.500',
            envolturaProducto: 'Panko / 8 Bocados',
            ingredientesProducto: 'Pollo, Queso crema y Cebollín'
        }
        )

    return(
        <Producto 
        nombreProducto = {producto.nombreProducto} 
        precioProducto = {producto.precioProducto} 
        envolturaProducto = {producto.envolturaProducto} 
        ingredientesProducto = {producto.ingredientesProducto}
        />
    )
}

export default ProductoSeleccionado;