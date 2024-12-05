import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaI } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div className='mt-8'>
            <h2 className='mb-3 text-xl font-medium'>Login With</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Button</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Button</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Button</button>
            </div>
        </div>
    );
};

export default FindUs;