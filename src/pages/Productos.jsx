import React from 'react';
import Categorias from '../components/Carta/Categorias/Categorias';
import ProductoSeleccionado from '../components/Producto/ProductoSeleccionado';
import Imgcab from '../components/Imagen cabecera/Imgcab';

function Productos (){
    return(
        <>
            <Imgcab nombrehead = 'California Rolls'/>
            <br></br>
            <div className = "main-container">
                <Categorias/>
                <ProductoSeleccionado/>
            </div>

        </>
    )
}

export default Productos;