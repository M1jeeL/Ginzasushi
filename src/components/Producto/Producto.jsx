import React from 'react';
import './Producto.css'

function Producto ( {nombreProducto, precioProducto, envolturaProducto, ingredientesProducto} ){


    return(
        <>
            <div className = "producto-container">
                <div className = "producto-pic">
                </div>
                <div className = "info-producto">   
                    <div className = "producto-titulo">
                        <span>{nombreProducto}</span>
                    </div>
                    <div className = "producto-precio">
                        <span>$ {precioProducto}</span>
                    </div>
                    <div className = "producto-envoltura">
                        <span>{envolturaProducto}</span>
                    </div>
                    <div className = "producto-ingredientes">
                        <span className = "ing">Ingredientes: </span>
                        <br></br>
                        <span className = "ing-desc">{ingredientesProducto}</span>
                    </div>
                    <div className = "añadir-al-carro">
                                
                    </div>
                </div>
            </div>





        </>
    )
}

export default Producto;