import React from 'react'
import ProfileImg from '../Components/ProfileImg.jsx'
import SocialLinks from '../Components/SocialLinks.jsx'
const About = () => {
    return (
        <div className='w-[80%] mx-auto flex flex-col lg:justify-center items-center gap-3 lg:flex-row lg:gap-7 pt-14 lg:pt-20 '>
            <div className="profileContainer flex flex-col justify-center items-center text-textColor w-[100%] lg:w-[35%]">
                <ProfileImg />
                <h1 className='text-2xl font-bold lg:font-black lg:text-3xl text-selected text-Shadow-Glow my-3 '>Yasir Ali</h1>
                <h1 className='text-2xl font-normal lg:text-3xl text-selected '>Full Stack Developer</h1>
                <SocialLinks />
            </div>
            <div className="aboutContainer w-[100%] lg:w-[65%] flex flex-col gap-3 lg:gap-4 text-textColor lg:p-4">
                <div className="aboutMe border-[1px] lightShadow border-selected rounded-lg">
                    <h1 className='text-selected p-4'>About Me</h1>
                </div>
                <div className="skills border-[1px] lightShadow border-selected rounded-lg">
                    <h1 className='text-selected p-4'>Skills</h1>
                </div>
                <div className="education border-[1px] lightShadow border-selected rounded-lg">
                    <h1 className='text-selected p-4'>Education</h1>
                </div>
            </div>
        </div>
    )
}

export default About
