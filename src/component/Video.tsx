import React from "react";
import { VideoConf } from "../data/Videos";
import './Video.css'

export function Video({ title, link }: VideoConf) {
    return (
        <div className="video-container">
            <iframe
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
                src={link + '?controls=0'}
            />
        </div>
    )
}