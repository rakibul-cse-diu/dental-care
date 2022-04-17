import React from 'react';

const Review = (props) => {
    const { name, img, review, rating } = props.review;
    return (
        <div className='p-2 m-1 mb-3 border-[1px] border-gray-200 rounded duration-700 hover:scale-105'>
            <div>
                <img className='rounded-[50%] ml-2' src={img} alt="profile pic" width={50} height={50} />
                <strong>{name}</strong>
            </div>
            <span className='text-orange-300'>Rating: {rating}</span>
            <p>"{review}"</p>
        </div>
    );
};

export default Review;