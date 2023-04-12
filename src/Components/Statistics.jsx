import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Statistics = () => {
    const chartContainer = useRef(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const data = [
                { Assignment: 1, mark: 57 },
                { Assignment: 2, mark: 58 },
                { Assignment: 3, mark: 58 },
                { Assignment: 4, mark: 60 },
                { Assignment: 5, mark: 58 },
                { Assignment: 6, mark: 60 },
                { Assignment: 7, mark: 56 },
            ];

            const assignmentMarks = data.map((d) => d.mark);
            const assignmentNumbers = data.map((d) => `Assignment ${d.Assignment}`);

            new Chart(chartContainer.current, {
                type: 'pie',
                data: {
                    labels: assignmentNumbers,
                    datasets: [
                        {
                            label: 'Assignment Marks',
                            data: assignmentMarks,
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                            ],
                        },
                    ],
                },
            });
        }
    }, []);

    return (
        <div className='flex flex-col items-center mt-12 justify-center text-center '>
            <h1 className='text-3xl lg:text-6xl font-bold items-center justify-center text-center mb-8'>Statistics</h1>
            <div className='w-96 lg:w-1/2'>
                <canvas ref={chartContainer} />
            </div>
        </div>
    );
};

export default Statistics;
