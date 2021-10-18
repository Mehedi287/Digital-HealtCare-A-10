import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Digital Health Care</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbar;