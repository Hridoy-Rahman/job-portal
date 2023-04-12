import React, { useState, useEffect } from "react";
import image from '../assets/Images/Vector.png';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState({});
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("Applied_Jobs")) || {};
        setAppliedJobs(storedData);
    }, []);
    const handleFilter = (event) => {
        setFilter(event.target.value);
      };

    return (
        <div>
            <div className='bg-gray-100 sm:px-4 lg:px-20  '>
                <h1 className='text-4xl text-center font-bold'>Applied Jobs</h1>
                <img className='h-32 ' src={image} alt='' />
            </div>
            <div className="text-xl font-semibold bg-gray-200 p-4 mx-auto mb-8 rounded-lg w-1/2 mt-8 lg:w-1/5 ">
                <label>
                    Filter:
                    <select  value={filter} onChange={handleFilter}>
                        <option value="">All</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                    </select>
                </label>
            </div>
            {Object.entries(appliedJobs).filter(([jobId, jobData]) => {
                console.log(filter)
          if (filter === "") {
            return true; // no filter applied
          } else {
            return jobData.remote_or_onsite === filter; // filter by location
          }
        }).map(([jobId, jobData]) => (
                <div className="p-4 lg:px-20">
                    <div className="flex flex-col lg:flex-row border-2 border-gray-200 p-4 justify-between items-center rounded-xl mb-4 " key={jobId}>
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        <div className="bg-gray-100 p-8 mb-4 rounded-xl justify-center items-center mr-4">
                            <img className="h-12 w-16 items-center" src={jobData.company_logo} alt="" />
                        </div>
                        <div className="text-start">
                            <h1 className="text-lg font-bold">{jobData.job_title}</h1>
                            <h3 className="text-md font-semibold text-gray-500 mb-2">{jobData.company_name}</h3>
                            <div className='flex'>
                                <h1 className='text-md text-purple-600 border-2 border-purple-300 px-2 py-1 mr-4 rounded-lg'>{jobData.remote_or_onsite}</h1>
                                <h1 className='text-md text-purple-600 border-2 border-purple-300 px-2 py-1 mr-4 rounded-lg'>{jobData.fulltime_or_parttime}</h1>
                            </div>
                            <div className='flex justify-between mt-2'>
                                <div className='flex'>
                                    <MapPinIcon className="h-6 w-6 text-gray-500 mr-2" />
                                    <p className='text-gray-500 font-semibold'>{jobData.location}</p>
                                </div>
                                <div className='flex'>
                                    <CurrencyDollarIcon className="h-6 w-6 text-gray-500 mr-2" />
                                    <p className='text-gray-500 font-semibold'>{jobData.salary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white p-3  mt-4 text-xl rounded-lg'><Link to={`/jobs/${jobData.id}`}>View Details</Link></button>
                    </div>
                </div>
                </div>
            ))}
        </div>
    );
};

export default AppliedJobs;
