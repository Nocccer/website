import React from "react";
import { Container, Row } from "react-bootstrap";
import band1 from '../images/band1.jpg'
import band2 from '../images/band2.jpg'
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
                            The mood-driven sound of
                            Dresden-based isolate combines a wide range of musical influences in a genre-transcending manner. With a
                            common
                            background of Postrock, Paul E. Riemer, Johan Keilig and Niklas Ciecior met in 2014 and started working with big
                            drums, reverby guitars, mellow pianos, breathing synth-layers and airy vocals. Since then, their musical
                            style
                            has
                            grown to a modern kind of multifaceted progressive Pop, while still retaining heavier elements.
                        </p>
                        <p> 
                            After gaining
                            reputation as promising live act, the three-piece released their self-recorded debut EP „A“ in December 2018,
                            along
                            with a music video for their first single „Asleep“. In June 2019, the band released their second music video “Adrift”. 
                        </p>
                    </div>
                </Row>
                <Row className="justify-content-lg-center">
                    <img src={band2} alt="release" className="band-image"/>
                </Row>
            </Container>
        </>
    );
}