import React from 'react'
import profilePic from '../assets/main.jpeg'
import AnimatedText from '../Components/AnimatedText.jsx'

const Home = () => {
    return (
        <>
            <div className='w-[80%] mx-auto flex  justify-center '>
                <div className="mainContainer text-textColor flex flex-col gap-4 pt-14 lg:pt-32">
                    <div className="imgContainer relative animate-upDown ">
                        <div className="circle relative w-[220px] h-[220px] lg:w-[380px] lg:h-[380px] border-4 border-selected rounded-full overflow-hidden p-2 lg:p-4 boxShadow">
                            <img
                                src={profilePic}
                                alt="profilePic"
                                className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div>
                    <div className="content text-center mt-2.5">
                        <h1 className='text-2xl font-bold lg:text-4xl'> Hi, I am <span className='text-selected text-Shadow-Glow'>Yasir Ali.</span></h1>
                    </div>
                </div>
            </div>
            <div className='w-[100%] mx-auto flex justify-center items-center'>
                <span className='text-2xl lg:text-4xl font-bold text-textColor'>I'm a&nbsp;</span>
                <AnimatedText />
                <span className='text-2xl lg:text-4xl font-bold text-textColor'>developer</span>
            </div>
        </>
    )
}

export default Home;
