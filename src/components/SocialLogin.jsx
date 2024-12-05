import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='mb-3 text-xl font-medium'>Login With</h2>
            <div className='*:w-full space-y-3'>
                <button className='btn'>
                    <FaGoogle></FaGoogle>Login With Google
                </button>
                <button className='btn'>
                    <FaGithub></FaGithub>
                    LOgin With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;