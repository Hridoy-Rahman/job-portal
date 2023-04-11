import React, { useState } from 'react';
import FeaturedJobs from './FeaturedJobs';


const FeaturedJobList = ({ jobs }) => {
    console.log(jobs)
    const [showAllJobs, setShowAllJobs] = useState(false);

    const toggleShowAllJobs = () => {
        setShowAllJobs(!showAllJobs);
    }
    return (
        <>
            <div className='mt-8 mb-8'>
                <h1 className='text-4xl font-bold mb-4'>Featured Jobs</h1>
                <p className='text-gray-500 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8'>
                {showAllJobs 
                ? jobs.map((job) => (
                    <FeaturedJobs key={job.id} job={job} />
                ))
                : jobs.slice(0, 4).map((job) => (
                    <FeaturedJobs key={job.id} job={job} />
                ))}
            </div>
            
            {!showAllJobs && (
                <div className='mt-8 text-center'>
                    <button onClick={toggleShowAllJobs} className='bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300'>
                        See More
                    </button>
                </div>
            )}
        </>
    );
};

export default FeaturedJobList;