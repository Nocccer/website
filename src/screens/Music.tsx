import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Release } from '../component/Release';
import { releases } from '../data/Releases';

export function Music()
{
    return (
        <>
            <Container>
                <Row className="justify-content-lg-center">
                    {releases.map((release) => (
                        <Release {...release}/>
                    ))}
                </Row>
            </Container>
        </>
    );
}