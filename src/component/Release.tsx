import React, { useState } from 'react';
import { Offcanvas, Button, Card } from 'react-bootstrap';
import './Release.css';
import { ReleaseConf } from '../data/Releases';

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
    const toggleShow = () => setShow(!show);

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

            <Offcanvas show={show} placement="end" onHide={handleClose} backdrop={true} scroll>
                {streams.length !== 0 && <Offcanvas.Title as="h2" className="release-card-canvas-h2">Stream</Offcanvas.Title>}
                {streams.map((stream) => (
                    <Button variant="primary" size="lg" href={stream.link} className="release-card-stream-buy">
                        {stream.name}
                    </Button>
                ))}
                {buys.length !== 0 && <Offcanvas.Title as="h2" className="release-card-canvas-h2">Buy</Offcanvas.Title>}
                {buys.map((buy) => (
                    <Button variant="primary" size="lg" href={buy.link} className="release-card-stream-buy">
                        {buy.name}
                    </Button>
                ))}
            </Offcanvas>
        </>
    );
}