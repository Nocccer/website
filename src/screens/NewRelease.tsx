import React from 'react';
import { ReleaseConf } from '../data/Releases';
import { OffCanvas } from '../component/OffCanvas';

export function NewRelease({
    // name,
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
            <OffCanvas show={true} streams={streams} buys={buys} renderCloseButton={false} image={picture} colors={colorStyle}/>
        </>
    );
}