import React from 'react';
import topology from '../images/topology.jpg'
import { Container, Row } from 'react-bootstrap';
import './Home.css'

export function Home()
{
    return (
        <>
            <Container>
                <Row className="justify-content-lg-center">
                    <img src={topology} alt="release" className="home-release"/>
                </Row>
            </Container>
        </>
    );
}