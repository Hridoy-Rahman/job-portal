import React from 'react';
import CategoryList from './CategoryList';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    return (
        <div>
            <div className='bg-gray-100 flex flex-col-reverse lg:flex-row gap-4 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <div className='w-full lg:w-1/2 lg:text-left mb-4'>
                    <h1 className='text-5xl font-bold mb-4'>
                        One Step <br /> Closer To Your <br /> <span className='text-cyan-300'>Dream Job</span>
                    </h1>
                    <p className='text-gray-500 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary text-white p-3 text-xl rounded-lg'>Get Started</button>
                </div>
                <div className='w-1/2 mb-4'>
                    <img className='text-center' src="../assets/Images/google-1-1 1.png" alt="Image unavailable" />
                </div>
            </div>

           
        </div>
    );
};

export default Home;