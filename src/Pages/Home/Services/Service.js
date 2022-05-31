import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ expert }) => {
    const { name, price, description, img } = expert;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: {price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Button>Book {name}</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Service;