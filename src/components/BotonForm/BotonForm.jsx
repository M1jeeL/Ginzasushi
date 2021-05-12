import React from 'react'
import './BotonForm.css'

export default function BotonForm(props) {
    return (
        <div className = "boton-form">
            <input value = {props.value} type = {props.type}/>
        </div>
    )
}
