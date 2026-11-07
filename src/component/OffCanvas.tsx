import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { LinkConf, ColorStyleConf } from '../data/Releases';
import './OffCanvas.css'

interface Props {
    name?: string; 
    show: boolean;
    closeFunction?: () => void;
    streams: LinkConf[];
    buys: LinkConf[];
    isUpcoming?: boolean;
    image: string;
    colors: ColorStyleConf;
    renderCloseButton?: boolean;
}

export function OffCanvas({
    name = 'Release',
    show,
    closeFunction = () => {return},
    streams,
    buys,
    isUpcoming = false,
    image,
    colors,
    renderCloseButton = true
}: Props
) {
    const closeButtonInvert = colors.isBright ? 0 : 100;
    const activeStreams = streams.flatMap((stream) => {
        const link = isUpcoming ? stream.preSaveLink : stream.link;
        return link ? [{ ...stream, link }] : [];
    });
    const activeBuys = buys.flatMap((buy) => {
        const link = isUpcoming ? buy.preOrderLink : buy.link;
        return link ? [{ ...buy, link }] : [];
    });

    return (
        <Offcanvas show={show} placement="top" >
            <div className="offcanvas-background" style={{backgroundImage: `url(${image})`}}/>
            <div className="scrollview">
                {renderCloseButton 
                    ? <Offcanvas.Header closeButton onHide={closeFunction} style={{filter: `invert(${closeButtonInvert}%)`}} />
                    : <Offcanvas.Header 
                        style={{
                            color: colors.textColor, 
                            filter: `invert(${closeButtonInvert}%)`, 
                            fontSize: '50px'
                        }}>{name}</Offcanvas.Header>}
                {activeStreams.length !== 0 &&
                <Offcanvas.Title 
                    as="h2" 
                    className="offcanvas-h2"
                    style={{
                        color: colors.backgroundColor
                    }}>{isUpcoming ? 'pre-save' : 'stream'}</Offcanvas.Title>}
                {activeStreams.map((stream) => (
                    <div key={stream.link} className="offcanvas-link-item">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            href={stream.link} 
                            className="offcanvas-stream-buy" 
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: colors.textColor,
                                backgroundColor: colors.backgroundColor,
                                border: `solid 2px ${colors.borderColor}`
                            }}
                        >
                            {stream.name}
                        </Button>
                    </div>
                ))}
                {activeBuys.length !== 0 &&
                <Offcanvas.Title 
                    as="h2" 
                    className="offcanvas-h2"
                    style={{
                        color: colors.backgroundColor
                    }}>{isUpcoming ? 'pre-order' : 'buy'}</Offcanvas.Title>}
                {activeBuys.map((buy) => (
                    <div key={buy.link} className="offcanvas-link-item">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            href={buy.link} 
                            className="offcanvas-stream-buy"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: colors.textColor,
                                backgroundColor: colors.backgroundColor,
                                border: `solid 2px ${colors.borderColor}`
                            }}
                        >
                            {buy.name}
                        </Button>
                    </div>
                ))}
                {isUpcoming && activeStreams.length === 0 && activeBuys.length === 0 &&
                    <p className="offcanvas-h2" role="status">Pre-save links will be available soon.</p>}
            </div>
        </Offcanvas>
    );
}
