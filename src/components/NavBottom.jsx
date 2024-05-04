import React from 'react'
import "./NavBottom.css"
import { Link } from 'react-router-dom'

function NavBottom() {
    return (
        <div className='NavBottom_main_div'>
            <div className='NavBottom_div'>
                <Link to={"/"} className='NavBottom_content'>
                    <img src='\assets\img\about\RAIDEN LOGO.svg' />
                </Link>
                <Link to={"skype:live:.cid.c468e07a8d611cab?chat"} className='NavBottom_content'>
                    <i style={{ color: "#2FACEC" }} class="fa-brands fa-telegram icon_bottom"></i>
                </Link>
                <Link to={"https://api.whatsapp.com/send?phone=919884036062&text=Hi,%20I%20need%20more%20details%20about%20Raiden%20software%20development%20services.%20Shall%20we%20discuss%20now?%20-%20https://raidenstudio.netlify.app/"} className='NavBottom_content'>
                    <i style={{ color: "#25D366" }} class="fa-brands fa-whatsapp icon_bottom"></i>
                </Link>
                <Link to={"https://telegram.me/Raidenstudios"} target='blank' className='NavBottom_content'>
                    <i style={{ color: "#2FACEC" }} class="fa-brands fa-skype icon_bottom"></i>
                </Link>
            </div>
        </div>
    )
}

export default NavBottom