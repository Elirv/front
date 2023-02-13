import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LogoutButton } from './LogoutButton';
// import { AuthContext } from '../auth/authContext/AuthContext';
import { useAuth0, } from '@auth0/auth0-react';

export const NavbarContainer = () => {

    const { user } = useAuth0();
    console.log(user);

    const date = new Date();
    const hour = date.getHours();
    const welcome =
        hour < 6 || hour > 18
            ? "Good evening, "
            : hour > 5 && hour < 13
                ? "Good morning, "
                : "Good afternoon, ";

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>MemePage</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/gif">Gifs</Nav.Link>
                        <Nav.Link href="/clip">Clips</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>

                    <Navbar bg="dark" expand="lg">
                        <Container fluid>
                            <Form className="d-flex ">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Container>
                    </Navbar>

                    <LogoutButton />
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            {/* <p>{user?.nickname}</p> */}
                            <p>{`${welcome}${user?.nickname}`}</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}