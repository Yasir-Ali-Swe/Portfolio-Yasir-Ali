import React from 'react'
import AnimatedText from '../Components/AnimatedText.jsx'
import ProfileImg from '../Components/ProfileImg.jsx'


const Home = () => {
    return (
        <>
            <div className='w-[80%] mx-auto flex  justify-center '>
                <div className="mainContainer text-textColor flex flex-col gap-4 pt-14 lg:pt-32">
                    <ProfileImg />
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
