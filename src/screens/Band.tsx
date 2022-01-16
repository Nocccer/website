import React from "react";
import { Container, Row } from "react-bootstrap";
import band1 from '../images/band1.jpg'
import band2 from '../images/band2.jpg'
import band3 from '../images/band3.jpg'
import './Band.css'

export function Band(){
    return (
        <>
            <Container>
                <Row className="justify-content-lg-center">
                    <img src={band1} alt="release" className="band-image"/>
                </Row>
                <Row>
                    <div className="band-bio">
                        <p>
                            From dreamy waters through amber clouds, you find yourself somewhere high above... 
                        </p>
                        <p>
                            The mood-driven sound of Dresden and Stockholm-based isolate combines a wide range of 
                            musical influences in a genre-transcending manner. With a common background of Post-rock, 
                            Paul E. Riemer (k/b), Johan Keilig (v/g) and Niklas Ciecior (d) met in 2014 and started 
                            working with big drums, reverby guitars, mellow pianos, breathing synth-layers and airy 
                            vocals. Since then, their musical style has grown to a modern kind of multifaceted progressive Pop, 
                            while still retaining heavier elements. 
                        </p>
                    </div>
                </Row>
                <Row className="justify-content-lg-center">
                    <img src={band2} alt="release" className="band-image"/>
                </Row>
                <Row>
                    <div className="band-bio">
                        <p>
                            After gaining a reputation as promising live act, 
                            the three-piece released their self-recorded debut EP "A" in December 2018, along with 
                            a music video for their first single "Asleep". In June 2019, the band released their second 
                            music video for "Adrift". 
                        </p>
                        <p>
                            With Johan Keilig moving to Sweden in 2020, isolate started working 
                            remotely from both countries. This new long-distance collaboration yielded their next release 
                            Topology, a four-track EP with more in-depth focus on vocals and cohesive song structure, alternating 
                            between Post, Progressive and Art rock. "Topology" was released in July 2021, along with a single version of "Quarry".
                            While working on their first full-length album, the band released their dream pop-loaded single Flare shortly after.
                        </p>
                    </div>
                </Row>
                <Row className="justify-content-lg-center">
                    <img src={band3} alt="release" className="band-image"/>
                </Row>
            </Container>
        </>
    );
}