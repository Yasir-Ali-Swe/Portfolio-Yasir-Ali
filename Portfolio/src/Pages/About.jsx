import React from 'react'

const About = () => {
    return (
        <div className='w-[80%] mx-auto flex flex-col justify-center items-center gap-3 lg:flex-row lg:gap-7 pt-14 lg:pt-20 '>
            <div className="profileContainer text-center text-textColor w-[100%] lg:w-[35%] border-2 border-selected">
                <h1>profile</h1>
            </div>
            <div className="aboutContainer text-center text-textColor w-[100%] lg:w-[65%] border-2 border-selected">
                <h1>about</h1>
            </div>
        </div>
    )
}

export default About
