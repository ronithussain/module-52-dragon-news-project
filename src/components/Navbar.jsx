import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            <div></div>
            <div>
                <div className='space-x-6'>
                    <Link to="/">Home</Link>
                    <Link to="/career">Career</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <button className='btn btn-neutral rounded-none'>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;