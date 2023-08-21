import './App.css';
import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavigationBar = () => {
    return (
        <div>

            <Navbar collapseOnSelect bg="dark" expand="lg" className="bg-body-tertiary">
                <Container style={{fontSize: '1.25rem'}}>
                    <Navbar.Brand style={{fontSize: '1.75rem', color: 'white'}}>MyBlogs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: 'white'}} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/" style={{color:'white', textDecoration: 'none', marginRight: '25px'}} >Home</Link>
                        <Link to="/create" style={{color:'white', textDecoration: 'none'}}>Create Blogs</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
