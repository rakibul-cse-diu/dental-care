import React from 'react';
import doctor from '../../images/doctor.png';
import Services from '../Services/Services';

import './Home.css';

const Home = () => {
    return (
        <div className='mb-10 min-h-screen'>
            <div className='top-banner flex flex-col-reverse md:flex-row justify-center items-center mb-10'>
                <div className='w-full md:w-1/2 text-white'>
                    <h2 className='text-3xl font-bold mb-2]'>"Haque Dental Care"</h2>
                    <h4 className='text-xl mb-5'>I am Dr Md. Haque. My aim is satisfy and meet the demands of community as a dentist.</h4>
                    <p className='text-sm'>Missing or lost teeth is nothing to laugh about as it can change your smile forever. When a tooth is lost, its opposite tooth becomes inactive as it requires two opposite teeth to bite. So loosing teeth doesn't only change your smile but it also compromises your functionality as well. But now we can bring back missing teeth with dental implants.</p>
                </div>
                <div className=''>
                    <img src={doctor} alt="" width={500} height={500} />
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;