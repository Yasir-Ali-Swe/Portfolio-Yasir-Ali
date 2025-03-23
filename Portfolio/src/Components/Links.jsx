import React from 'react'
import { NavLink } from 'react-router-dom'




const Links = () => {
    return (
        <>
            <ul className='flex flex-col absolute top-4 left-0 w-[100%] items-center  lg:static lg:flex lg:flex-row gap-6 lg:gap-10 text-textColor text-lg font-bold cursor-pointer lg:text-xl'>
                <li><NavLink to="/" className={({ isActive }) =>
                    isActive ? 'navLinks' : ' text-textColor '
                } >Home</NavLink></li>
                <li ><NavLink to="/about" className={({ isActive }) =>
                    isActive ? 'navLinks' : ' text-textColor '
                }>About</NavLink></li>
                <li ><NavLink to="/services" className={({ isActive }) =>
                    isActive ? 'navLinks' : 'text-textColor'
                }>Services</NavLink></li>
                <li ><NavLink to="/contact" className={({ isActive }) =>
                    isActive ? 'navLinks' : 'text-textColor'
                }>Contact</NavLink></li>

            </ul>
        </>
    )
}

export default Links;
