import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <nav className='flex justify-between items-center'>
            <div>{user && user.name}</div>
            <div>
                <div className='space-x-6'>
                    <Link to="/">Home</Link>
                    <Link to="/career">Career</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    {
                        user && user?.email ? //user and user er email jodi thake tahole img and display name show koro , jodi na thake tahole img icon show koro.
                            <div className='flex flex-col justify-center items-center'>
                                <img className='rounded-full w-12' src={user?.photoURL} alt="" />
                                <p className='text-sm'>{user.displayName}</p>
                            </div> : 
                            <img src={userIcon} alt="" />
                    }

                </div>
                {
                    user && user ? (<button onClick={logOut} className='btn btn-neutral px-8 rounded-none'>Signout</button>) : (<Link to="/auth/login" className='btn btn-neutral px-8 rounded-none'>Login</Link>)
                }
            </div>
        </nav>
    );
};

export default Navbar;