import React from 'react';
import CakeImg from './assets/imgs/cake.png';

const App: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <div>
                <h1 className='text-7xl font-semibold text-rose-600'>
                    Happy Birthday
                </h1>
                <img src={CakeImg} alt='cake' className='w-[400px] h-auto' />
            </div>
        </div>
    );
};

export default App;
