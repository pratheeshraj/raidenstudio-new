import React from 'react'
import "./NavBottom.css"
import { Link } from 'react-router-dom'

function NavBottom() {
    return (
        <div className='NavBottom_main_div'>
            <div className='NavBottom_div'>
                <Link className='NavBottom_content'>
                    <img src='\assets\img\about\RAIDEN LOGO.svg' />
                </Link>
                <Link className='NavBottom_content'>
                    <i style={{ color: "#2FACEC" }} class="fa-brands fa-telegram icon_bottom"></i>
                </Link>
                <Link className='NavBottom_content'>
                    <i style={{ color: "#25D366" }} class="fa-brands fa-whatsapp icon_bottom"></i>
                </Link>
                <Link className='NavBottom_content'>
                    <i style={{ color: "#2FACEC" }} class="fa-brands fa-skype icon_bottom"></i>
                </Link>
            </div>
        </div>
    )
}

export default NavBottom