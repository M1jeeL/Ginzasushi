import React from 'react';
import './Imgcab.css';


function Imgcab({ nombrehead }){
        return(
            <>
               <div className = "cabecera-pic">
                    <div className = "centro-pic">
                        <h1>{nombrehead}</h1>
                    </div>
                </div>           
            </>
        )
}

export default Imgcab;