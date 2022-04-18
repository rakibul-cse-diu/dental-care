import React from 'react';

const ForgotPass = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-lg font-medium'>Login with email and password</h2>
            <form className='flex flex-col w-3/4 md:w-1/4'>
                <label className='text-lg mt-5' htmlFor="email">Email</label>
                <input className='h-10 pl-3 outline-[#1F2B6C] border-[1px] border-gray-200' type="email" name="email" id="email" placeholder='Enter your email' required />
                <input className='my-5 px-6 py-1 bg-[#1F2B6C] text-white text-lg font-semibold cursor-pointer' type="submit" value="Reset" />
            </form>
        </div>
    );
};

export default ForgotPass;