import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import './Release.css';

interface Links {
    name: string;
    link: string;
}

interface Props {
    name: string;
    picture: string;
    date: string;
    description: string;
    tracklist: string[];
    links: Links[];
}

export function Release({
    name,
    picture,
    date,
    description,
    tracklist,
    links
}: Props
) {
    return (
        <>
            <Accordion className="release-card">
                <Card className="release-card">
                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                        <Card.Img variant="top" src={picture} className="release-card-image" />
                        <Card.Title>{name} {date}</Card.Title>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="release-card-body">
                            {description && (
                                <Card.Text>{description}</Card.Text>
                            )}
                            {tracklist && (
                                <ol>
                                    {tracklist.map((track) => (
                                        <li>{track}</li>
                                    ))}
                                </ol>
                            )}
                            {links.map((stream) => (
                                <Button variant="primary" size="lg" href={stream.link} className="release-card-stream">
                                    {stream.name}
                                </Button>
                            ))}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
}