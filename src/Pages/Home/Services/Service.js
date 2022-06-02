import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ expert }) => {
    const { id, name, price, description, img } = expert;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: {price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Button onClick={()=>navigateToServiceDetail(id)}>Book {name}</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Service;