import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className = "footer">
            <div className = "footer-container">
                <div className = "footer-info">
                    <div className = "footer-logo"></div>
                    <div className = "footer-contacto">
                        <div className = "footer-wsp">
                            <i class="fab fa-whatsapp fa-3x"></i>
                            <span className = "fa-2x">+56937396320</span>
                        </div>
                        <div className = "footer-ig">
                            <i class="fab fa-instagram  fa-3x"></i>
                            <span className = "fa-2x">@ginzasushi_delivery</span>
                        </div>
                    </div>
                </div>
                <div className = "footer-firma">
                    <p>© Ginzasushi delivery - Desarrollado por mijel</p>
                </div>
            </div>
        </div>
        
    )
}
