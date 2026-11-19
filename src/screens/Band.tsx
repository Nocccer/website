import React from "react";
import { Container, Row } from "react-bootstrap";
import band1 from "../images/band1.jpg";
import band2 from "../images/band2.jpg";
import band3 from "../images/band3.jpg";
import "./Band.css";

export function Band() {
  return (
    <>
      <Container>
        <Row className="justify-content-lg-center">
          <img src={band1} alt="release" className="band-image" />
        </Row>
        <Row>
          <div className="band-bio">
            <p>
              The mood-driven sound of Dresden-based isolate combines a wide
              range of musical influences in a genre-transcending manner.
            </p>
            <p>
              With a common background of Post-rock, Paul E. Riemer (key, bass),
              Johan Keilig (vocal, guitar) and Niklas Ciecior (drums) met in
              2014 and started blending a wide variety of genres. Since then,
              their style has grown into a multifaceted kind of pop, while every
              now and then playing with heavier elements. After gaining a
              reputation as a promising live act, the three-piece released
              their self-recorded debut EP A in December 2018.
            </p>
          </div>
        </Row>
        <Row className="justify-content-lg-center">
          <img src={band2} alt="release" className="band-image" />
        </Row>
        <Row>
          <div className="band-bio">
            <p>
              With Johan moving to Sweden in 2020, isolate started working
              remotely from both countries. This long-distance collaboration
              yielded the four-track EP Topology in July 2021, alternating
              between Post, Progressive and Art rock, followed by the dream
              pop-loaded single Flare.
            </p>
            <p>
              After some time recharging their creative powers, isolate is back
              with Suburbia, a complex soundscape about long-distance
              friendships and feeling lost in modern urban life. Written and
              recorded between Stockholm and Dresden, it is the band's first
              release in five years. More to come, stay tuned!
            </p>
          </div>
        </Row>
        <Row className="justify-content-lg-center">
          <img src={band3} alt="release" className="band-image" />
        </Row>
      </Container>
    </>
  );
}
