import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import googleLogo from '../../images/Google-logo.png';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');
    const [errPass, setErrPass] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    if (error) {
        return (
            <div className='min-h-screen'>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <div className='min-h-screen'><p>Loading...</p></div>;
    }
    if (user) {
        return (
            <div className='min-h-screen mt-10 text-center text-xl'>
                <p>Registered User successfully. You can now login...</p>
            </div>
        );
    }


    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    }
    const handlePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    }
    const handleConfrimPassword = (event) => {
        const value = event.target.value;
        setConfrimPassword(value);
    }
    const handleRegister = (e) => {
        e.preventDefault();

        if (password === confrimPassword) {
            createUserWithEmailAndPassword(email, password);
            setErrPass(false);
        } else {
            setErrPass(true);
        }

    }
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-lg font-medium'>Register a new account</h2>
            <form onSubmit={handleRegister} className='flex flex-col w-3/4 md:w-1/4'>
                <label className='text-lg mt-5' htmlFor="email">Email</label>
                <input onBlur={handleEmail} className='h-10 pl-3 outline-[#1F2B6C] border-[1px] border-gray-200' type="email" name="email" id="email" placeholder='Enter your email' required />
                <label className='text-lg mt-3' htmlFor="password">Password</label>
                <input onBlur={handlePassword} className='h-10 pl-3 outline-[#1F2B6C] border-[1px] border-gray-200' type="password" name="password" id="password" placeholder='Enter your password' required />
                <label className='text-lg mt-3' htmlFor="confrim-password">Confrim password</label>
                <input onBlur={handleConfrimPassword} className='h-10 pl-3 outline-[#1F2B6C] border-[1px] border-gray-200' type="password" name="password" id="confrim-password" placeholder='Confrim your password' required />
                <input className='my-5 px-6 py-1 bg-[#1F2B6C] text-white text-lg font-semibold cursor-pointer' type="submit" value="Register" />
                {
                    errPass && <p className='text-red-500'>Password does't match</p>
                }
                <span className='text-sm'>Already have an account? <Link to="/login"><button className='text-blue-500 underline decoration-blue-500'>Login</button></Link></span>
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

export default Register;