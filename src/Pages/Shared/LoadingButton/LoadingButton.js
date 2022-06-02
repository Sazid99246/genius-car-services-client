import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const LoadingButton = () => {
    return (
        <Button variant="primary" disabled className="d-flex align-items-center justify-content-center">
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>

    );
};

export default LoadingButton;