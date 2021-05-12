import React, { useState} from 'react';
import Card from './Card';
import ListaCarta from './ListaCarta.json';
import { Link } from 'react-router-dom';


export default function Cards (){
    const [producto, setProducto] = useState({});

    console.log(producto);

    return(
        <>
            <div className = "cards-container" >
                {ListaCarta.productos.map((item) => {
                    return(
                        <div key = {item.id}>
                            <ul>
                                <li className = "cards-links" >
                                    <Link to = "/productos" onClick = {() => setProducto(item)}>
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
