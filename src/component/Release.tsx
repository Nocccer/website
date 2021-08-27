import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Release.css';
import { ReleaseConf } from '../data/Releases';
import { OffCanvas } from './OffCanvas';

export function Release({
    name,
    picture,
    date,
    description,
    streams,
    buys
}: ReleaseConf
) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <Card className="release-card">
                <Card.Img variant="top" src={picture} className="release-card-image" onClick={toggleShow} />
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{date}</Card.Subtitle>
                <Card.Body>
                    {description && (
                        <Card.Text>{description}</Card.Text>
                    )}
                </Card.Body>
            </Card>

            <OffCanvas show={show} streams={streams} buys={buys} closeFunction={handleClose}/>
        </>
    );
}