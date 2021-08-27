import React from "react";
import { Button, Offcanvas, Row } from "react-bootstrap";
import { LinkConf } from '../data/Releases';
import './OffCanvas.css'

interface Props {
    show: boolean;
    closeFunction: () => void;
    streams: LinkConf[];
    buys: LinkConf[];
}

export function OffCanvas({
    show,
    closeFunction,
    streams,
    buys
}: Props
) {
    return (
        <Offcanvas show={show} placement="top">
            <Offcanvas.Header closeButton onHide={closeFunction}/>
            {streams.length !== 0 && <Offcanvas.Title as="h2" className="offcanvas-h2">Stream</Offcanvas.Title>}
            {streams.map((stream) => (
                <Row className="justify-content-lg-center">
                    <Button variant="primary" size="lg" href={stream.link} className="offcanvas-stream-buy">
                        {stream.name}
                    </Button>
                </Row>
            ))}
            {buys.length !== 0 && <Offcanvas.Title as="h2" className="offcanvas-h2">Buy</Offcanvas.Title>}
            {buys.map((buy) => (
                <Row className="justify-content-lg-center">
                    <Button variant="primary" size="lg" href={buy.link} className="offcanvas-stream-buy">
                        {buy.name}
                    </Button>
                </Row>
            ))}
        </Offcanvas>
    );
}
