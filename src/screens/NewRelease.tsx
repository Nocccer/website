import React from 'react';
import { ReleaseConf } from '../data/Releases';
import { OffCanvas } from '../component/OffCanvas';
import {Helmet} from "react-helmet";

export function NewRelease({
    name,
    picture,
    // date,
    // description,
    streams,
    buys,
    colorStyle
}: ReleaseConf)
{
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta property="og:title" content={`${name} out now!`} />
                <meta property="og:type" content="music" />
                <meta property="og:url" content={`https://www.weareisolate.com/#/${name.toLowerCase()}`} />
                <meta property="og:image" content={picture} />
                <title>{name} out now!</title>
            </Helmet>
            <OffCanvas name={name} show={true} streams={streams} buys={buys} renderCloseButton={false} image={picture} colors={colorStyle}/>
        </>
    );
}