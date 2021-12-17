import React, { useState } from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import './Home.css';
import { releases } from '../data/Releases';
import { OffCanvas } from '../component/OffCanvas';

export function Home() {
    const [show, setShow] = useState(false);
    const closeOffCanvas = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <Container>
                <Row className="justify-content-lg-center">
                    <Image src={releases[0].picture} className="home_release_image" onClick={toggleShow}/>
                </Row>

                <OffCanvas 
                    show={show} 
                    streams={releases[0].streams} 
                    buys={releases[0].buys} 
                    closeFunction={closeOffCanvas} 
                    image={releases[0].picture}
                    colors={releases[0].colorStyle}
                />
            </Container>
        </>
    );
}