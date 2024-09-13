import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home';

const App: React.FC = () => {
    const router = createBrowserRouter([
        { path: '/home.txs', element: <Home /> },
        {},
    ]);
    return (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
            <button className='text-3xl outline-none border-2 border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform hover:scale-110'>
                <a href='/home.txs'>Click me!</a>
            </button>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
