import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LoginButton } from './LoginButton';

export const StartNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>MemePage</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/gif"></Nav.Link>
                        <Nav.Link href="/clip"></Nav.Link>
                        <Nav.Link href="/profile"></Nav.Link>
                    </Nav>
                    <LoginButton />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}