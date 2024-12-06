import React from 'react';
import Header from '../components/Header';
import RightNav from '../components/layout-components/RightNav';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    // console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 mt-8'>
                <section className='col-span-8 mb-6'>
                    <h2 className='font-semibold mb-3'>Dragon News</h2>

                    <div className="card bg-base-100 shadow-xl">
                        <figure className='px-8 pt-8'>
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-none w-full md:h-80 lg:h-96" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="font-bold  text-start">{news?.title}</h2>
                            <p className='text-justify'>{news?.details}</p>
                            <div className="card-actions w-full ">
                                <Link to={`/category/${news.category_id}`} className="btn btn-error rounded-none">All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-4'>
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;