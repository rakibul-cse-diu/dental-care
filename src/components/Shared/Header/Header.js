import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between items-center bg-[#1F2B6C] py-3 px-5'>
            <div>
                <h2 className='text-2xl font-bold text-white'><Link to="/">Dental Care.</Link></h2>
            </div>

            <div className={`block md:hidden text-3xl z-20 text-white`} onClick={() => setOpen(!open)}>
                {
                    open ? <FontAwesomeIcon icon={faXmark} /> :
                        <FontAwesomeIcon icon={faBars} />
                }
            </div>
            <nav className={`w-1/2 p-10 md:p-0 text-lg text-white font-normal bg-[#1F2B6C] lg:bg-transparent flex flex-col md:flex-row justify-evenly absolute right-0 md:static duration-500 ${open ? 'top-0' : 'top-[-500px]'}`}>
                <CustomLink to="services">Services</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <button className='btn px-6 py-1 mt-5 md:mt-0 bg-[#BFD2F8] text-[#1F2B6C] rounded-[50px]'><Link to="/login">Login</Link></button>
            </nav>
        </div>
    );
};

export default Header;