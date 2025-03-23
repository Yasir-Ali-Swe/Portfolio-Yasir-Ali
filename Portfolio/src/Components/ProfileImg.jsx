import React from 'react'
import profilePic from '../assets/main.jpeg'
const profileImg = () => {
    return (
        <div className="imgContainer relative animate-upDown ">
            <div className="circle relative w-[220px] h-[220px] lg:w-[380px] lg:h-[380px] border-4 border-selected rounded-full overflow-hidden p-2 lg:p-4 boxShadow">
                <img
                    src={profilePic}
                    alt="profilePic"
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
                />
            </div>
        </div>
    )
}

export default profileImg;
