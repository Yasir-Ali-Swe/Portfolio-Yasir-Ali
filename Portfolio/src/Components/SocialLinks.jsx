import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const SocialLinks = () => {
    const handleExternalLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className='flex gap-6 my-5 lg:mt-5'>
            <Link
                onClick={() => handleExternalLink('https://github.com/Yasir-Ali-Swe')}
            >
                <VscGithubAlt className='hover:text-selected text-3xl' />
            </Link>
            <Link
                onClick={() => handleExternalLink('https://www.linkedin.com/in/yasir-ali-75541534a/')}
            >
                <CiLinkedin className='hover:text-selected text-3xl' />
            </Link>
            <Link
                onClick={() => handleExternalLink('mailto:ali.yasirswe@gmail.com')}
            >
                <MdOutlineMail className='hover:text-selected text-3xl' />
            </Link>
        </div>
    );
};

export default SocialLinks;
