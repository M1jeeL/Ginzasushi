import React, { useState } from 'react';
import Producto from './Producto';

function ProductoSeleccionado () {
    const [nombreProducto, setNombreProducto] = useState('Chikin');
    const [precioProducto, setPrecioProducto] = useState('2.500');
    const [envolturaProducto, setEnvolturaProducto] = useState('Envuelto en panko / 8 bocados');
    const [ingredientesProducto, setIngredientesProducto] = useState('Pollo, queso crema y cebollin');

    return(
        <Producto 
        nombreProducto = {nombreProducto} 
        precioProducto = {precioProducto} 
        envolturaProducto = {envolturaProducto} 
        ingredientesProducto = {ingredientesProducto}
        />
    )
}

export default ProductoSeleccionado;