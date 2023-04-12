import React, { useEffect, useState } from 'react';
import image from '../assets/Images/Vector.png';
import { useLoaderData, useParams } from 'react-router-dom';
import { MapPinIcon, CalendarDaysIcon, PhoneIcon, InboxArrowDownIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../Utils/fakeDB';

const JobDetails = () => {

        

    const { jobId } = useParams()
    const job = useLoaderData();
    const [jobDetails, setJobDetails] = useState([]);
    //   console.log(job)

    useEffect(() => {
        if (job.id == jobId) {
            console.log(job)
            setJobDetails(job);
        }
    }, []);

    const applyButtonhandler=(job)=>{
        
        addToDb(job)
            
    }


    if (!jobDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='bg-gray-100 p-8 lg:p-20 '>
                <h1 className='text-4xl text-center font-bold'>Job Details</h1>
                {/* <img className='h-32 b-0' src={image} alt='' /> */}
                <div className="bg-no-repeat bg-left-top ..." style={{backgroundImage:{image}}}></div>
            </div>
            <div className='flex flex-col lg:flex-row mt-12'>
                <div className='text-start p-8 lg:w-2/3'>
                    <h4 className='text-lg text-bold text-gray-600 mb-4'><span className='text-xl font-bold'>Job Description : </span>{jobDetails.job_description}</h4>

                    <h4 className='text-lg text-bold text-gray-600 mb-4'><span className='text-xl font-bold'>Job Responsibility : </span>{jobDetails.job_responsibility}</h4>

                    <h4 className='text-lg text-bold text-gray-600 mb-4'><span className='text-xl font-bold'>Educational Requirements : </span><br />{jobDetails.educational_requirements}</h4>

                    <h4 className='text-lg text-bold text-gray-600 mb-4'><span className='text-xl font-bold '>Expriences: </span><br />{jobDetails.experiences}</h4>
                </div>
                <div className='lg:w-1/3  text-start'>
                    <div className='w-full p-8 bg-gray-100 rounded-lg text-start'>
                        <h1 className='text-xl font-bold text-gray-700 mb-4'>Job Details</h1><hr />
                        <div className='flex items-center mb-4 mt-4'>
                            <CurrencyDollarIcon className="h-6 w-6 text-purple-500 mr-2" />
                            <p className=' text-lg text-gray-500 font-semibold mr-3'><span className=' text-lg text-gray-600 font-semibold'>Salary :</span>{job.salary}</p>
                        </div>
                        <div className='flex items-center mb-4'>
                            <CalendarDaysIcon className="h-6 w-6 text-purple-500 mr-2" />
                            <p className=' text-lg text-gray-500 font-semibold'><span className=' text-lg text-gray-600 font-semibold mr-3'>Job Title :</span>{job.job_title}</p>
                        </div>

                        <h1 className='text-xl font-bold text-gray-700 mb-4'>Contact Information</h1><hr />
                        <div className='flex items-center mb-4 mt-4'>
                            <PhoneIcon className="h-6 w-6 text-purple-500 mr-2" />
                            <p className=' text-lg text-gray-500 font-semibold mr-3'><span className=' text-lg text-gray-600 font-semibold mr-3'>Phone :</span>{job.contact_information.phone}</p>
                        </div>
                        <div className='flex items-center mb-4 mt-4'>
                            <InboxArrowDownIcon className="h-6 w-6 text-purple-500 mr-2" />
                            <p className=' text-lg text-gray-500 font-semibold mr-3'><span className=' text-lg text-gray-600 font-semibold mr-3'>Email :</span>{job.contact_information.email}</p>
                        </div>
                        <div className='flex items-center mb-4 mt-4'>
                            <MapPinIcon className="h-6 w-6 text-purple-500 mr-2" />
                            <p className=' text-lg text-gray-500 font-semibold mr-3'><span className=' text-lg text-gray-600 font-semibold mr-3'>Address :</span>{job.location}</p>
                        </div>
                    </div>
                    <button onClick={()=>applyButtonhandler(job)} className='w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white p-3  mt-4 text-xl rounded-lg'>Apply Now</button>
                </div>
               
            </div>
        </div>
    );
};

export default JobDetails;
