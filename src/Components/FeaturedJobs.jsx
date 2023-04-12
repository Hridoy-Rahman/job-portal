import React from 'react';
import {MapPinIcon,CurrencyDollarIcon} from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';
import JobDetails from './JobDetails';

const FeaturedJobs = ({ job }) => {
    // console.log(job)
   
   
    return (
        <>
            <div className='border border-gray-200 bg-gray-100 rounded-lg p-4 text-start '>
                <img className='mb-6' src={job.company_logo} alt="" />
                <h1 className='text-3xl font-semibold mb-3'>{job.job_title}</h1>
                <h1 className='text-xl text-gray-500 font-semibold mb-3'>{job.company_name}</h1>
                <div className='flex'>
                    <h1 className='text-lg text-purple-600 border-2 border-purple-300 px-2 py-1 mr-4 rounded-lg'>{job.remote_or_onsite}</h1>
                    <h1 className='text-lg text-purple-600 border-2 border-purple-300 px-2 py-1 mr-4 rounded-lg'>{job.fulltime_or_parttime}</h1>
                </div>
                <div className='flex justify-between mt-4'>
                    <div className='flex'>
                        <MapPinIcon className="h-6 w-6 text-gray-500 mr-2" />
                        <p className='text-gray-500 font-semibold'>{job.location}</p>
                    </div>
                    <div className='flex'>
                    <CurrencyDollarIcon className="h-6 w-6 text-gray-500 mr-2" />
                    <p className='text-gray-500 font-semibold'>{job.salary}</p>
                    </div>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white p-3 w-1/4 mt-4 text-xl rounded-lg'><Link to={`/jobs/${job.id}`}>View Details</Link></button>
            </div>
        </>
    );
};

export default FeaturedJobs;