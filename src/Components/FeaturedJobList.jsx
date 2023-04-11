import React from 'react';

const FeaturedJobList = ({jobs}) => {
    console.log(jobs)
    return (
        <>
            <div className='mt-8 mb-8'>
                <h1 className='text-4xl font-bold mb-4'>Featured Jobs</h1>
                <p className='text-gray-500 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8'>
                {
                   
                }
            </div>
        </>
    );
};

export default FeaturedJobList;