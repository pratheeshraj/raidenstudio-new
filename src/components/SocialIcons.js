import React from 'react'
import { Link } from 'react-router-dom'
import "./SocialIcons.css"

function SocialIcons() {
    return (
        <div className='social_icon_div'>
            <Link>FaceBook <i class="fa-brands fa-facebook"></i></Link>
            <Link>YouTube <i class="fa-brands fa-youtube"></i></Link>
            <Link>Instagram <i class="fa-brands fa-instagram"></i></Link>
            <Link>Twitter <i class="fa-brands fa-twitter"></i></Link>
        </div>
    )
}

export default SocialIcons