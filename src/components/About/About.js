import React from 'react';
import profile from '../../images/profile-pic.png'

const About = () => {
    return (
        <div className='min-h-screen px-2 md:px-10 flex flex-col justify-center items-center my-4'>
            <h2 className='text-3xl underline font-bold text-[#1F2B6C] mb-8'>About Me</h2>
            <div className='flex flex-col justify-center items-center'>
                <img src={profile} alt="" height={250} width={250} />
                <h4 className='text-xl font-bold mb-3'>Name: Md. Rakibul Hasan</h4>
                <h6 className='text-lg font-semibold underline'>My Goal:</h6>
                <p className='w-3/4 text-base'>My goal is to be a well-skilled web developer. To achieve my goal, I give myself all possible time to learn new things and train myself as a good skilled developer as much as possible. I enrolled in the web development course of Programming Hero, so that it could be helpful to me to achieve my goal. I am trying to obey every instruction from my mentor, and I utilize my time management skills for that.</p>
            </div>
        </div>
    );
};

export default About;