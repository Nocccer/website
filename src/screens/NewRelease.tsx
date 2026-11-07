import React from 'react';
import { isReleaseUpcoming, ReleaseConf } from '../data/Releases';
import { OffCanvas } from '../component/OffCanvas';

export function NewRelease({
    name,
    picture,
    date,
    // description,
    streams,
    buys,
    colorStyle
}: ReleaseConf)
{
    return (
        <>
            <OffCanvas name={name} show={true} streams={streams} buys={buys} isUpcoming={isReleaseUpcoming(date)} renderCloseButton={false} image={picture} colors={colorStyle}/>
        </>
    );
}