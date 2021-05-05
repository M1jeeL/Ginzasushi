import React from 'react';
import './Imgcab.css';


function Imgcab({ nombrehead }){
        return(
            <>
               <article className = "cabecera-pic">
                    <div className = "centro-pic">
                        <h1>{nombrehead}</h1>
                    </div>
                </article>           
            </>
        )
}

export default Imgcab;