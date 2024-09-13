import React from 'react';

const App: React.FC = () => {
    return (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
            <button className='text-3xl outline-none border-2 border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform hover:scale-110'>
                surprise box
            </button>
        </div>
    );
};

export default App;
