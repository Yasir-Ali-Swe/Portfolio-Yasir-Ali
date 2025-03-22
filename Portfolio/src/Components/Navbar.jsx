import React, { useState } from 'react'
import Links from './Links.jsx';
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="w-[87%] lg:w-[80%] mx-auto Navbar flex justify-between items-center mt-6 lg:mt-12">
            <div className="Logo">
                <h1 className="text-selected text-3xl font-black cursor-pointer underline decoration-[2px #0ef] text-Shadow-Glow">
                    <span className='hidden lg:inline'>Yasir Ali</span>
                    <span className=' lg:hidden'>YA</span>
                </h1>
            </div>
            <div className={`Links ${isOpen ? "block" : "hidden"} lg:block relative`}>
                <Links />
            </div>
            <div className="HamburgerIcon text-textColor block text-3xl lg:hidden">
                <IoMenu onClick={toggleMenu} />
            </div>
        </div >
    )
}

export default Navbar;
