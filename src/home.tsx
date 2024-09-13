import React from 'react';
import CakeImg from './assets/imgs/cake.png';
const home: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen bg-mainbg bg-cover'>
            <img src={CakeImg} alt='cake' className='w-[1000px] h-auto ' />
        </div>
    );
};

export default home;
