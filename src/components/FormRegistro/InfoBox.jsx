import React from 'react'

export default function InfoBox(props) {
    return (
        <div className="container-info-box">
            <div className = "name-box">
                <h2>{props.info}</h2>
            </div>
            <div className = "input-box">
                <input type={props.type} />
            </div>
        </div>
    )
}
