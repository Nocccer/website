import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import './Home.css';
import { releases } from '../data/Releases';

export function Home() {
    return (
        <>
            <Container>
                <Row className="justify-content-lg-center">
                    <Card className="release-card">
                        <Card.Img variant="top" src={releases[0].picture} />
                        <Card.Title>{releases[0].name}</Card.Title>
                        <Card.Subtitle>{releases[0].date}</Card.Subtitle>
                        <Card.Body>
                            {releases[0].description && (
                                <Card.Text>{releases[0].description}</Card.Text>
                            )}
                            {releases[0].streams.length !== 0 && <h2 className="home-card-canvas-h2">Stream</h2>}
                            {releases[0].streams.map((stream) => (
                                <Button variant="primary" size="lg" href={stream.link} className="home-card-stream-buy">
                                    {stream.name}
                                </Button>
                            ))}
                            {releases[0].buys.length !== 0 && <h2 className="home-card-canvas-h2">Buy</h2>}
                            {releases[0].buys.map((buy) => (
                                <Button variant="primary" size="lg" href={buy.link} className="home-card-stream-buy">
                                    {buy.name}
                                </Button>
                            ))}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
}