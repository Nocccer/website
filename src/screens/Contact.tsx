import React from 'react';
import { Container } from 'react-bootstrap';

export function Contact()
{
    return (
        <Container className="date-container">
            <div>
                For booking enquiries please contact: <br></br>
                <a className="url-link" href="mailto:booking@weareisolate.com">booking@weareisolate.com</a><br></br><br></br>
                For everything else, reach out to us at <br></br>
                <a className="url-link" href="mailto:info@weareisolate.com">info@weareisolate.com</a><br></br>
                or on social media<br></br><br></br>
                isolate is<br></br><br></br>
                Niklas Ciecior <br></br>
                Johan Keilig<br></br>
                Paul Riemer<br></br>
            </div>
        </Container>
    );
}