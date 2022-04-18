import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/Google-logo.png';

const Login = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-lg font-medium'>Login with email and password</h2>
            <form className='flex flex-col w-3/4 md:w-1/4'>
                <label className='text-lg mt-5' htmlFor="email">Email</label>
                <input className='h-10 pl-3 outline-[#1F2B6C] border-[1px] border-gray-200' type="email" name="email" id="email" placeholder='Enter your email' />
                <label className='text-lg mt-3' htmlFor="password">Password</label>
                <input className='h-10 pl-3 outline-[#1F2B6C] border-[1px] border-gray-200' type="password" name="password" id="password" placeholder='Enter your password' />
                <input className='my-5 px-6 py-1 bg-[#1F2B6C] text-white text-lg font-semibold cursor-pointer' type="submit" value="Login" />
                <Link to="/resetpassword"><span className='text-sm text-blue-500 underline decoration-blue-500'>Forgot password?</span></Link>
                <span className='text-sm'>Don't have any account? <Link to="/register"><button className='text-blue-500 underline decoration-blue-500'>register</button></Link></span>
            </form>
            <div className='mt-8'>
                <div className='flex justify-center items-center'>
                    <div className='w-[80px] h-[3px] bg-slate-200'></div>
                    <small className='mx-2 text-lg font-semibold'>Or</small>
                    <div className='w-[80px] h-[3px] bg-slate-200'></div>
                </div>
                <div>
                    <button className='my-5 px-6 py-1 bg-[#BFD2F8] text-[#1F2B6C] hover:bg-[#1F2B6C] hover:text-[#BFD2F8] duration-500 text-lg font-semibold cursor-pointer rounded-sm'>
                        <img className='inline mr-3' src={googleLogo} alt="" height={30} width={30} />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;