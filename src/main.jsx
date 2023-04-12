import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import App from './App';
import './index.css';
import Statistics from './Components/Statistics';
import Blog from './Components/Blog';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import AppliedJobs from './Components/AppliedJobs';
import JobDetails from './Components/JobDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home categories={[]} jobs={[]} />,
        loader: async () => {
          const jobCategory = await fetch('Category.json');
          const categoryData = await jobCategory.json();
          const featuredJobs = await fetch('Job.json');
          const jobData = await featuredJobs.json();
          // console.log(categoryData)
          return { categories: categoryData, jobs: jobData };
        },
      },
      {
        path: 'jobs/:jobId',
        element: <JobDetails />,
        loader: async ({ params }) => {
          const { jobId } = params;
          console.log(jobId)
          const jobs = await fetch('/Job.json');
          const jobData = await jobs.json();
          // console.log(jobData)
          const job = jobData.find((job) =>(job.id==jobId))
          return job;
        },
      },
      { path: 'statistics', element: <Statistics /> },
      { path: 'blog', element: <Blog /> },
      { path: 'appliedJobs', element: <AppliedJobs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);