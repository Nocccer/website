import React, { useState } from "react";
import { Button, Offcanvas, Row } from "react-bootstrap";
import { getPaletteFromURL } from'color-thief-node';
import rgbHex from 'rgb-hex';
import { LinkConf } from '../data/Releases';
import './OffCanvas.css'

interface Props {
    show: boolean;
    closeFunction: () => void;
    streams: LinkConf[];
    buys: LinkConf[];
    image: string;
}

export function OffCanvas({
    show,
    closeFunction,
    streams,
    buys,
    image
}: Props
) {
    const [textColor, setTextColor] = useState<string>("#ffffff");
    const [backgroundColor, setBackgroundColor] = useState<string>("#000000");
    const [borderColor, setBorderColor] = useState<string>("#ffffff");
    const [closeButtonInvert, setCloseButtonInvert] = useState<number>(0);

    getPaletteFromURL(image, 2, 0.5)
        .then(color => {
            setTextColor('#' + rgbHex(color[0][0], color[0][1], color[0][2]));
            setBackgroundColor('#' + rgbHex(color[1][0], color[1][1], color[1][2]));
            setBorderColor('#' + rgbHex(color[2][0], color[2][1], color[2][2]));
            if(color[0][0] + color[0][1] + color[0][2] >= 384) // --> is bright
            {
                setCloseButtonInvert(0);
            }
            else // --> is dark
            {
                setCloseButtonInvert(100);
            }
        })
        .catch(e => {
            console.log(e);
        });

    return (
        <Offcanvas show={show} placement="top" >
            <div className="offcanvas-background" style={{backgroundImage: `url(${image})`}}/>
            <div className="scrollview">
                <Offcanvas.Header closeButton onHide={closeFunction} style={{filter: `invert(${closeButtonInvert}%)`}}/>
                {streams.length !== 0 && 
                <Offcanvas.Title 
                    as="h2" 
                    className="offcanvas-h2"
                    style={{
                        color: backgroundColor
                    }}>stream</Offcanvas.Title>}
                {streams.map((stream) => (
                    <Row className="justify-content-lg-center">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            href={stream.link} 
                            className="offcanvas-stream-buy" 
                            style={{
                                color: textColor,
                                backgroundColor: backgroundColor,
                                border: `solid 2px ${borderColor}`
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
                        color: backgroundColor
                    }}>buy</Offcanvas.Title>}
                {buys.map((buy) => (
                    <Row className="justify-content-lg-center">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            href={buy.link} 
                            className="offcanvas-stream-buy"
                            style={{
                                color: textColor,
                                backgroundColor: backgroundColor,
                                border: `solid 2px ${borderColor}`
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
