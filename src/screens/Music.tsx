import React from 'react';
import { Container, Row } from 'react-bootstrap';
import topology from '../images/topology.jpg';
import { Release } from '../component/Release';

export function Music()
{
    return (
        <>
            <Container>
                <Row className="justify-content-lg-center">
                    <Release 
                        name="Topology"
                        picture={topology}
                        date="07/30/2021" 
                        description=""
                        tracklist={[
                            "Topology",
                            "Quarry",
                            "Eden",
                            "Landscapes"
                        ]}
                        links={[
                            {
                                name: "spotify",
                                link: "https://open.spotify.com/artist/2KVRUdfwOl2Sq7G7t6DByf?si=K022c82mSvuI31Hte-eNHQ&dl_branch=1"
                            }
                        ]}
                    />
                </Row>
            </Container>
        </>
    );
}