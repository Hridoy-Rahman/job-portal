import React from 'react';


const JobCategory = ({job}) => {
    
    return (
        <div className='border border-gray-200 bg-gray-100 rounded-lg p-4 text-start '>
            <img className='border border-gray-300 bg-gray-300 p-4 rounded-xl mb-4' src={job.logo} alt="fhgf" />
            <h1 className='text-xl font-semibold mb-3'>{job.name}</h1>
            <p className='text-lg text-gray-500 mb-3'>{job.jobs_available} jobs available</p>
        </div>
    );
};

export default JobCategory;