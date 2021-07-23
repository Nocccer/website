import React from "react";
import { Container } from "react-bootstrap";
import { Video } from "../component/Video";
import { videos } from '../data/Videos';
import './Videos.css'

export function Videos() {
    return (
        <>
            <Container className="justify-content-lg-center">
                {videos.official.length !== 0 && <h2 className="videos-h2">Official</h2>}
                {videos.official.map((video) => (
                    <Video {...video}/>
                ))}
                {videos.cooperation.length !== 0 && <h2 className="videos-h2">Cooperation</h2>}
                {videos.cooperation.map((video) => (
                    <Video {...video}/>
                ))}
            </Container>
        </>
    )
}