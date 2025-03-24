import React from 'react'
import { IoCodeOutline } from "react-icons/io5";
import { RiLayout5Line } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { GoLightBulb } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";
import Card from "../Components/Card.jsx"
const Services = () => {
    const services = [
        {
            icon: <IoCodeOutline className="h-10 w-10 text-textColor" />,
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies and best practices.",
            tags: ["React", "Next.js", "Node.js"],
        },
        {
            icon: <RiLayout5Line className="h-10 w-10 text-textColor" />,
            title: "UI/UX Design",
            description: "User-centered design solutions that enhance usability and create delightful user experiences.",
            tags: ["Wireframing", "Prototyping", "User Testing"],
        },
        {
            icon: <FiSmartphone className="h-10 w-10 text-textColor" />,
            title: "Responsive Design",
            description: "Mobile-first websites that look and function perfectly on all devices and screen sizes.",
            tags: ["Mobile-First", "Cross-Browser", "Accessibility"],
        },
        {
            icon: <CiGlobe className="h-10 w-10 text-textColor" />,
            title: "E-Commerce Solutions",
            description: "Online stores with secure payment processing, inventory management, and customer accounts.",
            tags: ["Shopify", "WooCommerce", "Custom Solutions"],
        },
        {
            icon: <GoLightBulb className="h-10 w-10 text-textColor" />,
            title: "Consultation",
            description: "Expert advice on technology choices, architecture, and development best practices.",
            tags: ["Technical Strategy", "Code Review", "Performance"],
        },
        {
            icon: <IoRocketOutline className="h-10 w-10 text-textColor" />,
            title: "Performance Optimization",
            description: "Speed up your existing website with advanced optimization techniques and best practices.",
            tags: ["Core Web Vitals", "SEO", "Caching"],
        },
    ]

    return (
        <div className='w-[80%] mx-auto flex justify-center'>
            <div className='w-full mt-14'>
                <div className='text-center'>
                    <h1 className='text-selected text-2xl lg:text-3xl  font-black my-2'>Services I Offer</h1>
                    <p className='text-textColor text-md lg:text-lg font-normal mb-2'>Specialized solutions tailored to your project needs, delivering quality results that exceed expectations.</p>
                </div>
                <div className="cardContainer w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14 place-items-center">
                    {
                        services.map((service, index) => (
                            <Card key={index} {...service} />
                        ))
                    }
                </div>
                <div className='text-white flex justify-center items-center mb-12'>

                </div>
            </div>
        </div>
    )
}

export default Services
