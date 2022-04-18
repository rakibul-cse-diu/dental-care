import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CheckOut = () => {
    const { name } = useParams()

    return (
        <div className='flex flex-col justify-center items-center my-12'>
            <h2 className='text-sm md:text-2xl font-semibold text-center'>Please fill the from for Checkout to <span className='text-[#BFD2F8] text-lg md:text-4xl'>{name}</span></h2>
            <div className='flex flex-col w-3/4 md:w-1/4'>
                <label className='text-lg mt-5' htmlFor="name">Name</label>
                <input className='h-10 pl-3 outline-[#1F2B6C] border-[1px] border-gray-200' type="text" name="name" id="name" placeholder='Your full name' required />
                <label className='text-lg mt-5' htmlFor="email">Email</label>
                <input className='h-10 pl-3 outline-[#1F2B6C] border-[1px] border-gray-200' type="email" name="email" id="email" placeholder='Your email' required />
                <label className='text-lg mt-5' htmlFor="address">Address</label>
                <input className='h-10 pl-3 outline-[#1F2B6C] border-[1px] border-gray-200' type="text" name="address" id="address" placeholder='Your address' required />
                <label className='text-lg mt-5' htmlFor="mobile">Mobile No.</label>
                <input className='h-10 pl-3 outline-[#1F2B6C] border-[1px] border-gray-200' type="tel" name="mobile" id="mobile" placeholder='017********' required />
                <Link to="/checkout/status"><button className='my-5 px-6 py-1 bg-[#1F2B6C] text-white text-lg font-semibold cursor-pointer'>Confrim</button></Link>
            </div>
        </div>
    );
};

export default CheckOut;