import React from "react";
import { Button, Offcanvas, Row } from "react-bootstrap";
import { LinkConf, ColorStyleConf } from '../data/Releases';
import './OffCanvas.css'

interface Props {
    show: boolean;
    closeFunction?: () => void;
    streams: LinkConf[];
    buys: LinkConf[];
    image: string;
    colors: ColorStyleConf;
    renderCloseButton?: boolean;
}

export function OffCanvas({
    show,
    closeFunction = () => {return},
    streams,
    buys,
    image,
    colors,
    renderCloseButton = true
}: Props
) {
    const closeButtonInvert = colors.isBright ? 0 : 100;

    return (
        <Offcanvas show={show} placement="top" >
            <div className="offcanvas-background" style={{backgroundImage: `url(${image})`}}/>
            <div className="scrollview">
                {renderCloseButton &&
                <Offcanvas.Header closeButton onHide={closeFunction} style={{filter: `invert(${closeButtonInvert}%)`}}/>}
                {streams.length !== 0 && 
                <Offcanvas.Title 
                    as="h2" 
                    className="offcanvas-h2"
                    style={{
                        color: colors.backgroundColor
                    }}>stream</Offcanvas.Title>}
                {streams.map((stream) => (
                    <Row className="justify-content-lg-center">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            href={stream.link} 
                            className="offcanvas-stream-buy" 
                            style={{
                                color: colors.textColor,
                                backgroundColor: colors.backgroundColor,
                                border: `solid 2px ${colors.borderColor}`
                            }}
                        >
                            {stream.name}
                        </Button>
                    </Row>
                ))}
                {buys.length !== 0 && 
                <Offcanvas.Title 
                    as="h2" 
                    className="offcanvas-h2"
                    style={{
                        color: colors.backgroundColor
                    }}>buy</Offcanvas.Title>}
                {buys.map((buy) => (
                    <Row className="justify-content-lg-center">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            href={buy.link} 
                            className="offcanvas-stream-buy"
                            style={{
                                color: colors.textColor,
                                backgroundColor: colors.backgroundColor,
                                border: `solid 2px ${colors.borderColor}`
                            }}
                        >
                            {buy.name}
                        </Button>
                    </Row>
                ))}
            </div>
        </Offcanvas>
    );
}
