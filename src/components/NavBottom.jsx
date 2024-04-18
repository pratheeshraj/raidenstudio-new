import React from 'react'
import "./NavBottom.css"
import { Link } from 'react-router-dom'

function NavBottom() {
    return (
        <div className='NavBottom_main_div'>
            <div className='NavBottom_div'>
                <Link className='NavBottom_content'>
                    <i class="fa-solid fa-house icon_bottom"></i>
                </Link>
                <Link className='NavBottom_content'>
                    <i class="fa-solid fa-blog icon_bottom"></i>
                </Link>
                <Link className='NavBottom_content'>
                    <i class="fa-solid fa-address-card icon_bottom"></i>
                </Link>
            </div>
        </div>
    )
}

export default NavBottom