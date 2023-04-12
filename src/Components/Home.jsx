import React from 'react';
import CategoryList from './CategoryList';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';
import image from '../assets/Images/image.png';
import FeaturedJobList from './FeaturedJobList';


const Home = () => {
    

    const jobs=useLoaderData()
    const jobCategory= jobs.categories
    const jobData=jobs.jobs
    // console.log(jobData)
    return (
        <div>
            <div className='bg-gray-100 flex flex-col-reverse lg:flex-row gap-4 p-8 lg:p-20 justify-center items-center rounded-b-xl'>
                <div className='w-full lg:w-1/2 lg:text-left mb-4'>
                    <h1 className='text-5xl font-bold mb-4'>
                        One Step <br /> Closer To Your <br /> <span className='text-cyan-300'>Dream Job</span>
                    </h1>
                    <p className='text-gray-500 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white p-3 text-xl rounded-lg'>Get Started</button>
                </div>
                <div className='w-1/2 mb-4'>
                    <img className='text-center' src={image} alt="Image unavailable" />
                </div>
            </div>
            <CategoryList
            
            jobCategory={jobCategory}></CategoryList>

            <FeaturedJobList
            jobs={jobData}
            ></FeaturedJobList>

           
        </div>
    );
};

export default Home;