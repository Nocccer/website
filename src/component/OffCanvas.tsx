import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { LinkConf, ColorStyleConf } from '../data/Releases';
import instagram from '../images/instagram.png';
import tiktok from '../images/tiktok.png';
import facebook from '../images/facebook.png';
import spotify from '../images/spotify.png';
import bandcamp from '../images/bandcamp.png';
import youtube from '../images/youtube.png';
import './OffCanvas.css'

function LinkPrefix({ name }: { name: string }) {
    const normalizedName = name.toLowerCase();
    const iconByName: Record<string, string> = {
        amazon: 'amazon',
        apple: 'apple',
        bandcamp: 'bandcamp',
        deezer: 'deezer',
        itunes: 'itunes',
        qobuz: 'qobuz',
        spotify: 'spotify',
        tidal: 'tidal',
        youtube: 'youtube',
        'youtube-music': 'youtube-music',
    };
    const iconName = iconByName[normalizedName];

    if (!iconName) {
        return <span className="offcanvas-link-prefix offcanvas-link-prefix-fallback" aria-hidden="true">•</span>;
    }
    const iconUrl = `${process.env.PUBLIC_URL}/store-icons/${iconName}.svg`;

    return (
        <span
            className="offcanvas-link-prefix offcanvas-link-prefix-logo"
            aria-hidden="true"
            style={{
                maskImage: `url(${iconUrl})`,
                WebkitMaskImage: `url(${iconUrl})`,
            }}
        />
    );
}

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
    showSocialLinks?: boolean;
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
    renderCloseButton = true,
    showSocialLinks = false
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
                        className="offcanvas-dedicated-header"
                        style={{
                            color: colors.textColor,
                            fontSize: '50px'
                        }}>
                        <span>{name}</span>
                    </Offcanvas.Header>}
                {showSocialLinks &&
                    <nav className="offcanvas-social-links" aria-label="ISOLATE social links">
                        <a href="https://www.instagram.com/isolate.band/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="https://www.tiktok.com/@isolate.band" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <img src={tiktok} alt="" />
                        </a>
                        <a href="https://www.facebook.com/we.are.isolate/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="https://open.spotify.com/artist/2KVRUdfwOl2Sq7G7t6DByf" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                            <img src={spotify} alt="" />
                        </a>
                        <a href="https://weareisolate.bandcamp.com/" target="_blank" rel="noopener noreferrer" aria-label="Bandcamp">
                            <img src={bandcamp} alt="" />
                        </a>
                        <a href="https://www.youtube.com/channel/UC1FYRyoopeAOYseePFf7M1g" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <img src={youtube} alt="" />
                        </a>
                    </nav>}
                {activeStreams.length !== 0 &&
                <Offcanvas.Title 
                    as="h2" 
                    className="offcanvas-h2"
                    style={{
                        color: colors.isBright ? '#181515' : '#ffffff'
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
                            <LinkPrefix name={stream.name} />
                            {stream.name}
                        </Button>
                    </div>
                ))}
                {activeBuys.length !== 0 &&
                <Offcanvas.Title 
                    as="h2" 
                    className="offcanvas-h2"
                    style={{
                        color: colors.isBright ? '#181515' : '#ffffff'
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
                            <LinkPrefix name={buy.name} />
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
