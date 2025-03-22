import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
    return (
        <>
            <ul className='flex gap-4 text-textColor'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>
        </>
    )
}

export default Links;
