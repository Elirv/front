import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LogoutButton } from './LogoutButton';
import { useAuth0, } from '@auth0/auth0-react';
import axios from 'axios';

export const NavbarContainer = () => {

    const [gif, setGif] = useState([])
    const [search, setSearch] = useState("")

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

    const searchGet = async () => {
        try {
            const response = await axios.get("http://localhost:5000/memes/get");
            console.log(response);
            setGif(response.data.data)
        } catch (error) {
            console.log('error');
        }
    }
    const handleChange = (e) => {
        setGif(e.target.value)
        filterSearch(e.target.value);
    }

    const filterSearch = (elementSearch) => {
        let result = gif.filter((element) => {
            if (element.name.toString().toLowerCase().includes(elementSearch.toLowerCase())){
                return element;
            }
        })
        setGif(result)
    }

    useEffect(() => {
        searchGet()
    }, [])

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
                                    type="text"
                                    value={search}
                                    placeholder="Search"
                                    name='filter'
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={handleChange}
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