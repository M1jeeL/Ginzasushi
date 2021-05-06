import React from 'react'
import logopng from '../../img/prueba/logo.png'
import './Card.css'



function Card ( { nombreProducto, ingredientesProducto, precioProducto} ){

        return(
            <>
            <div className = "card-container" >
                <div className = "card-info">
                    <div className = "card-titulo">
                        <span>{nombreProducto}</span>
                    </div>
                    <div className = "card-descripcion"> 
                        <div className = "card-ingredientes">
                            <span>{ingredientesProducto}</span>
                        </div>
                       
                        <div className = "card-precio">
                            <footer>
                                <span>$ {precioProducto}</span>
                            </footer>
                        </div>
                    </div>
                </div>
                <div>
                    <img src = {logopng} alt = "sushito" className = "card-pic" />
                </div>
            </div>
            </>
        );
}
    
export default Card;
