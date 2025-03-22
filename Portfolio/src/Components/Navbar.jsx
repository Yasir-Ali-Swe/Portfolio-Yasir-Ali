import React from 'react'
import Links from './Links.jsx';
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
    return (
        <div className="w-[80%] mx-auto Navbar flex justify-between items-center mt-12">
            <div className="Logo">
                <h1 className="text-selected text-3xl font-black cursor-pointer underline decoration-[2px #0ef] text-Shadow-Glow">
                    Yasir Ali
                </h1>
            </div>
            <div className="Links hidden lg:block">
                <Links />
            </div>
            <div className="HamburgerIcon text-white block lg:hidden">
                <IoMenu />
            </div>
        </div>
    )
}

export default Navbar;
