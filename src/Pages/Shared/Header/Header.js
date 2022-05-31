import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'
const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href='home#services'>Services</Nav.Link>
                        <Nav.Link href='home#experts'>Experts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;