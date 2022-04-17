import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='flex flex-col justify-center items-center px-5 mt-14'>
            <h2 className='text-3xl underline font-bold text-[#1F2B6C] mb-8'>Reviews</h2>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 w-3/4'>
                {
                    reviews.map(review => <Review review={review} key={review.id}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;