import React from 'react';
import './Producto.css'

export default function Producto ( {nombreProducto, precioProducto, envolturaProducto, ingredientesProducto} ){


    return(
        <>
            <div className = "producto-container">
                <div className = "producto-pic">
                </div>
                <div className = "info-producto">   
                    <div className = "producto-titulo">
                        <span>{nombreProducto}</span>
                    </div>
                    <div className = "linea-producto"><hr/></div>
                    <div className = "producto-precio">
                        <span>$ {precioProducto}</span>
                    </div>
                    <div className = "linea-producto"><hr/></div>
                    <div className = "producto-envoltura">
                        <span className = "envoltura">{envolturaProducto}</span>
                    </div>
                    <div className = "linea-producto"><hr/></div>
                    <div className = "producto-ingredientes">
                        <span className = "ing">Ingredientes: </span>
                        <br></br>
                        <span className = "ing-desc">{ingredientesProducto}</span>
                    </div>
                    <div className = "linea-producto"><hr/></div>
                    <div className = "añadir-al-carro">
                        <div className = "cantidad">
                            <i className="fas fa-plus-square fa-2x"></i>
                            <span className = "cantidad-productos">1</span>
                            <i className="fas fa-minus-square fa-2x"></i>
                        </div>
                        <div className = "boton">
                            <span>Añadir al carrito</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}