import React, { useState } from 'react';
import Card from './Card';
import ListaCarta from './ListaCarta.json';
import { Link } from 'react-router-dom';


export default function Cards (){
    const [nombreProducto, setNombreProducto] = useState();
    const [precioProducto, setPrecioProducto] = useState();
    const [envolturaProducto, setEnvolturaProducto] = useState();
    const [ingredientesProducto, setIngredientesProducto] = useState();




    console.log(ListaCarta);
    return(

        <div className = "cards-container" >
            {ListaCarta.productos.map((item) => {
                return(
                    <>
                        <div key = {item.id}>
                            <ul>
                                <li className = "cards-links">
                                    <Link to = {item.url} >
                                        <Card 
                                        nombreProducto = {item.nombreProducto} 
                                        ingredientesProducto = {item.ingredientesProducto} 
                                        precioProducto = {item.precioProducto} 
                                        url = {item.url}
                                        />
                                    </Link>
                                </li>
                            </ul>                         
                        </div>
                    </>
                )
            })}
        </div>
    )
}
