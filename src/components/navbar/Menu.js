import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Navbar.css"
const Menu = () => {
    return (
        <div>
            <Navbar expand="lg" classNam="nav" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className="img-fluid logo rounded-pill me-2" src="https://fiverr-res.cloudinary.com/w_280,f_auto,q_auto/attachments/generic_asset/asset/f7d61bd27b87eb26cc5a1730decf65fa-1577009326000/Foxit.png" alt="" /> Digital Health Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="d-gird justify-content-end">

                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#details">Details</Nav.Link>
                            <Nav.Link href="#doctors">Doctors</Nav.Link>
                            <Nav.Link href="#service">Service</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <button className="btn text-white">Login</button>
                    <button className="btn text-white">Log Out</button>

                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;