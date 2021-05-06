import React, { useState } from 'react';
import Card from './Card';
import ListaCarta from './ListaCarta.json';
import { Link } from 'react-router-dom';


export default function Cards (){
    const [productoSeleccionado, setProductoSeleccionado] = useState();
    


    
    return(
        <>
            <div className = "cards-container" >
                {ListaCarta.productos.map((item) => {
                    return(
                            <div>
                                <ul>
                                    <li className = "cards-links" >
                                        <Link to = "/productos" key = {item.id}>
                                            <Card 
                                            nombreProducto = {item.nombreProducto} 
                                            ingredientesProducto = {item.ingredientesProducto} 
                                            precioProducto = {item.precioProducto}
                                            />
                                        </Link>
                                    </li>
                                </ul>                         
                            </div>
                    )
                })}
            </div>
        </>
    )
}
