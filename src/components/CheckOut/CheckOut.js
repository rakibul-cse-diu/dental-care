import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { name } = useParams()
    return (
        <div className='min-h-screen'>
            <h2>Check out for {name}</h2>
        </div>
    );
};

export default CheckOut;