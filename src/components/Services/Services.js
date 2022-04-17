import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='flex flex-col justify-center items-center px-5 min-h-screen'>
            <h2 className='text-3xl underline font-bold text-[#1F2B6C] mb-8'>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center content-center px-10'>
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;