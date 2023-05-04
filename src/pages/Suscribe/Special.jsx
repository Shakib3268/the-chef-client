import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Special = () => {
    return (
        <div className='text-center mt-8 mb-4 card-body card'>
            <h1 className='text-3xl font-bold'>Special Ofers For New <br /> Subscribers</h1>
            <p className='mt-3 text-xl'>Subscribe to our newsletters now and stay up to date <br /> with new collections.</p>
            <div className='text-center'>
                <input className='border-gray-400 border-2 p-5 mt-5 w-3/4 rounded-full text-2xl focus:outline-none focus:border-blue-400' type="text" name='email' placeholder='Enter Your Email' />
            </div>
        </div>
    );
};

export default Special;