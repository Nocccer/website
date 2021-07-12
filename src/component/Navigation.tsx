import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import isolate from '../images/isolate.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import spotify from '../images/spotify.png';
import bandcamp from '../images/bandcamp.png';
import youtube from '../images/youtube.png';
import './Navigation.css'

export function Navigation() {
    return (
        <>
            <Navbar className="navbar" collapseOnSelect fixed='top' expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={isolate}
                            className="logo"
                            width="201"
                            height="71"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='navigation' className="menu-entry" role="navigation">
                        <Nav.Link href='/' className="navbar-entry">Home</Nav.Link>
                        <Nav.Link href='/band' className="navbar-entry">Band</Nav.Link>
                        <Nav.Link href='/music' className="navbar-entry">Music</Nav.Link>
                        <Nav.Link href='/videos' className="navbar-entry">Videos</Nav.Link>
                        <Nav.Link href='/dates' className="navbar-entry">Dates</Nav.Link>
                        <Nav.Link href='/contact' className="navbar-entry">Contact</Nav.Link>
                    </Navbar.Collapse>
                    <Navbar.Collapse>
                        <Nav.Link href='https://www.instagram.com/isolate.band/' >                        
                            <img src={instagram} alt="instagram" className="social-media"/></Nav.Link>
                        <Nav.Link href='https://www.facebook.com/we.are.isolate/'>                        
                            <img src={facebook} alt="facebook" className="social-media"/></Nav.Link>
                        <Nav.Link href='https://open.spotify.com/artist/2KVRUdfwOl2Sq7G7t6DByf'>                        
                            <img src={spotify} alt="spotify" className="social-media"/></Nav.Link>
                        <Nav.Link href='https://weareisolate.bandcamp.com/'>                        
                            <img src={bandcamp} alt="bandcamp" className="social-media"/></Nav.Link>
                        <Nav.Link href='https://www.youtube.com/channel/UC1FYRyoopeAOYseePFf7M1g'>                        
                            <img src={youtube} alt="youtube" className="social-media"/></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}