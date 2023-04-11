import React from 'react';
import JobCategory from './JobCategory';

const CategoryList = ({ jobCategory }) => {
    console.log(jobCategory)
    return (
        <>
            <div className='mt-8 mb-8'>
                <h1 className='text-4xl font-bold mb-4'>Job Category List</h1>
                <p className='text-gray-500 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8'>
                {
                    jobCategory.map((job) =><JobCategory
                    key={job.id}
                    job={job}></JobCategory>)
                }
            </div>
        </>
    );
};

export default CategoryList;