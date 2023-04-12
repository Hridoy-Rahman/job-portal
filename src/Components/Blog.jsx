import React from 'react';

const Blog = () => {
    return (
        <div className='w-full p-4 lg:w-1/2 mx-auto'>
            <h1 className='text-3xl text-center font-bold mt-8 text-red-400'>Question Answer</h1>
            <div className='border-2 border-gray-200 rounded-xl p-4 lg:p-12 mt-8'>
                <h1 className='text-3xl text-center font-bold text'>When should you use context API</h1>
                <p className='text-xl text-gray-400 font-semibold '>Context API is a feature in React that allows us to share data between components without having to pass it down through every level of the component tree as props. We can use Context API when we have data that needs to be shared across multiple components and we don't want to pass it down manually as props.</p>
            </div>
            <div className='border-2 border-gray-200 rounded-xl lg:p-12 mt-8 p-4'>
                <h1 className='text-3xl text-center font-bold text'>What is custom hook?</h1>
                <p className='text-xl text-gray-400 font-semibold '>In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic across different components. Custom hooks allow you to abstract away complex stateful logic from your components into reusable functions that can be shared between different components.</p>
            </div>
            <div className='border-2 border-gray-200 rounded-xl lg:p-12 mt-8 p-4'>
                <h1 className='text-3xl text-center font-bold text'>What is useRef</h1>
                <p className='text-xl text-gray-400 font-semibold '>useRef is a hook provided by React that allows you to create a mutable reference that persists across re-renders of a component. The useRef hook returns an object with a current property that can be assigned a value, and this value will persist throughout the lifetime of the component.</p>
            </div>
            <div className='border-2 border-gray-200 rounded-xl p-4 lg:p-12 mt-8'>
                <h1 className='text-3xl text-center font-bold text'>What is useMemo</h1>
                <p className='text-xl text-gray-400 font-semibold '>useMemo is a hook provided by React that allows you to memoize expensive calculations so that they are only executed when their dependencies change. The useMemo hook takes two arguments: a function that returns the value to be memoized, and an array of dependencies that determine when the memoized value should be recomputed.</p>
            </div>
        </div>
    );
};

export default Blog;