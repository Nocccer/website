import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import isolate from '../images/isolate.svg';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import spotify from '../images/spotify.png';
import bandcamp from '../images/bandcamp.png';
import youtube from '../images/youtube.png';
import './Navigation.css'

export function Navigation() {
    return (
        <>
            <Navbar className="navbar" collapseOnSelect fixed='top' expand='xl' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={isolate}
                            className="logo"
                            width="201"
                            height="71"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navigation' />
                    <Navbar.Collapse id='navigation'>
                        <Nav className="menu-entry" role="navigation">
                            <Nav.Link as={NavLink} exact to="/" className="navbar-entry">home</Nav.Link>
                            <Nav.Link as={NavLink} to="/band" className="navbar-entry">band</Nav.Link>
                            <Nav.Link as={NavLink} to="/music" className="navbar-entry">music</Nav.Link>
                            <Nav.Link as={NavLink} to="/videos" className="navbar-entry">videos</Nav.Link>
                            <Nav.Link as={NavLink} to="/dates" className="navbar-entry">dates</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="navbar-entry">contact</Nav.Link>
                        </Nav>
                        <Nav className="social-nav">
                            <Nav.Link href='https://www.instagram.com/isolate.band/'>
                                <img src={instagram} alt="instagram" className="social-media" />
                            </Nav.Link>
                            <Nav.Link href='https://www.facebook.com/we.are.isolate/'>
                                <img src={facebook} alt="facebook" className="social-media" />
                            </Nav.Link>
                            <Nav.Link href='https://open.spotify.com/artist/2KVRUdfwOl2Sq7G7t6DByf'>
                                <img src={spotify} alt="spotify" className="social-media" />
                            </Nav.Link>
                            <Nav.Link href='https://weareisolate.bandcamp.com/'>
                                <img src={bandcamp} alt="bandcamp" className="social-media" />
                            </Nav.Link>
                            <Nav.Link href='https://www.youtube.com/channel/UC1FYRyoopeAOYseePFf7M1g'>
                                <img src={youtube} alt="youtube" className="social-media" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}