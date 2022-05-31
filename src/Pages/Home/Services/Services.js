import React, { useEffect, useState } from 'react';
import Service from './Service';
import { Row } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-4 container' id="services">
            <h2 className='text-primary text-center'>Our Services</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        expert={service}
                        key={service.id}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;