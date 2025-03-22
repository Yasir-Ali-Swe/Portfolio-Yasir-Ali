import React from 'react'
import { NavLink } from 'react-router-dom'




const Links = () => {
    return (
        <>
            <ul className='flex flex-col absolute top-4 left-0 w-[100%] items-center  lg:static lg:flex lg:flex-row gap-6 lg:gap-10 text-textColor text-lg font-bold cursor-pointer lg:text-xl'>
                <li><NavLink to="/" className={({ isActive }) =>
                    isActive ? 'navLinks' : 'hover:bg-secondaryBackground px-28 py-[4px] text-textColor lg:hover:bg-mainBackground lg:px-0 lg:py-0'
                } >Home</NavLink></li>
                <li ><NavLink to="/about" className={({ isActive }) =>
                    isActive ? 'navLinks' : 'hover:bg-secondaryBackground px-28 py-[4px] text-textColor lg:hover:bg-mainBackground lg:px-0 lg:py-0'
                }>About</NavLink></li>
                <li ><NavLink to="/services" className={({ isActive }) =>
                    isActive ? 'navLinks' : 'hover:bg-secondaryBackground px-28 py-[4px] text-textColor lg:hover:bg-mainBackground lg:px-0 lg:py-0'
                }>Services</NavLink></li>
                <li ><NavLink to="/skills" className={({ isActive }) =>
                    isActive ? 'navLinks' : 'hover:bg-secondaryBackground px-28 py-[4px] text-textColor lg:hover:bg-mainBackground lg:px-0 lg:py-0'
                }>Skills</NavLink></li>
                <li ><NavLink to="/contact" className={({ isActive }) =>
                    isActive ? 'navLinks' : 'hover:bg-secondaryBackground px-28 py-[4px] text-textColor lg:hover:bg-mainBackground lg:px-0 lg:py-0'
                }>Contact</NavLink></li>

            </ul>
        </>
    )
}

export default Links;
