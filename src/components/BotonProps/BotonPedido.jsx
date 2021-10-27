import React from 'react'
import './BotonPedido.scss'
export default function BotonPedido(props) {
    return (
        <div className="dashboard-pedido-btn">   
            <div className="dashboard-pedido-btn-icon">
                <i className={props.icono}></i>
            </div>
            <div className="dashboard-pedido-btn-info">
               <p>{props.info}</p>
            </div>
        </div>  
    )     
}