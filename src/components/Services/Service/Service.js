import React from 'react';

const Service = (props) => {
    const { name, id, price, img, description } = props.service;
    console.log(props.service);
    return (
        <div className='flex flex-col justify-center items-center border-[1px] border-gray-200 pb-3 duration-700 hover:scale-105'>
            <img className='w-full' src={img} alt="" />
            <h3 className='font-bold mt-3'>{name}</h3>
            <span className='font-semibold'>Price: ${price}</span>
            <p className='text-sm w-3/4'>{description}</p>
            <button className='btn px-6 py-1 mt-5 bg-[#BFD2F8] hover:bg-[#1F2B6C] text-[#1F2B6C] hover:text-[#BFD2F8] duration-500 rounded-[50px] font-bold'>Book Now</button>
        </div>
    );
};

export default Service;