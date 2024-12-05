import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNav from '../components/layout-components/RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayouts = () => {
    return (
        <div className='font-poppins'>
            <header><Header></Header></header>
            <section className='w-11/12 mx-auto mt-4'>
                <LatestNews></LatestNews>
            </section>
            \
            <nav className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-6 grid md:grid-cols-12 gap-x-3'>
                <aside className='border col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className=' col-span-6'>
                <Outlet></Outlet>
                   
                </section>
                <aside className='border col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;