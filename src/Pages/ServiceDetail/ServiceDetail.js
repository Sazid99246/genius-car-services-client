import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Welcome to detail: {serviceId}</h1>
            <div className='d-flex item-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Please Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;