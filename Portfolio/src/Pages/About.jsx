import React from 'react'
import ProfileImg from '../Components/ProfileImg.jsx'
import SocialLinks from '../Components/SocialLinks.jsx'
const About = () => {
    const skills = [
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "UI/UX Design",
        "Responsive Design",
    ]
    return (
        <div className='w-[80%] mx-auto flex flex-col lg:justify-center items-center gap-3 lg:flex-row lg:gap-12 pt-14 lg:pt-20 '>
            <div className="profileContainer flex flex-col justify-center items-center text-textColor w-[100%] lg:w-[35%]">
                <ProfileImg />
                <h1 className='text-2xl font-bold lg:font-black lg:text-3xl text-selected text-Shadow-Glow my-3 '>Yasir Ali</h1>
                <h1 className='text-2xl font-normal lg:text-3xl text-selected '>Full Stack Developer</h1>
                <SocialLinks />
            </div>
            <div className="aboutContainer w-[108%] lg:w-[70%] flex flex-col gap-3 lg:gap-4 text-textColor lg:p-4">
                <div className="aboutMe border-[1px] lightShadow border-selected rounded-lg">
                    <h1 className='text-selected px-4 py-2 text-xl texlg:t-2xl font-bold'>About Me</h1>
                    <p className='px-4 pb-2 text-justify text-textColor text-md lg:text-lg font-semibold'>
                        I am a passionate Software Engineer with 1 year of hands-on experience in full-stack development, specializing in the MERN stack, Next.js, and Flutter.
                        <br />
                        <span className='hidden lg:inline'>
                            I thrive on solving complex problems, continuously learning new technologies, and creating impactful digital solutions. My portfolio showcases projects that reflect my dedication to innovation and delivering exceptional results.
                        </span>
                        <br className='hidden lg:inline' />
                        Let’s build something amazing together!
                    </p>
                </div>
                <div className="skills border-[1px] lightShadow border-selected rounded-lg">
                    <h1 className='text-selected px-4 py-2 text-xl texlg:t-2xl font-bold'>Skills</h1>
                    <div className='px-4 py-2 flex flex-wrap gap-2'>
                        {
                            skills.map((skill, index) => (
                                <div className='text-selected cursor-pointer text-md lg:text-lg font-semibold bg-secondaryBackground rounded-lg px-2 py-1'>
                                    {skill}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="education border-[1px] lightShadow border-selected rounded-lg mb-3">
                    <h1 className='text-selected px-4 py-2 text-xl texlg:t-2xl font-bold'>Education</h1>
                    <p className='px-4 text-justify text-textColor text-md lg:text-lg font-semibold'>Bachelor of Science in Software Engineering</p>
                    <p className='px-4 pb-2 text-justify text-textColor text-md lg:text-lg font-light'>National Textile University,2022-2026</p>
                    <p className='px-4 text-justify text-textColor text-md lg:text-lg font-semibold'>Full Stack Development learning source.</p>
                    <p className='px-4 pb-2 text-justify text-textColor text-md lg:text-lg font-light'>
                        University Courses,Youtube and Self-Practice.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
