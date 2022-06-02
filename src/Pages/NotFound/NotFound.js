import React from 'react';
import sleeping from '../../images/sleeping.jpg'
const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>Mechanic is sleeping</h1>
            <img src={sleeping} alt="" className='w-100' />
        </div>
    );
};

export default NotFound;