import React from 'react'
import profilePic from '../assets/main.jpeg'

const Home = () => {
    return (
        <div className='h-screen w-[80%] mx-auto flex justify-center '>
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
                <div className="content text-center">
                    <h1>Yasir Ali</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;
