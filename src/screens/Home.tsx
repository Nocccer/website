import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import { releases } from '../data/Releases';
import { Release } from '../component/Release';

export function Home() {
    return (
        <main className="home-page">
            <Container>
                <Release {...releases[0]} featured />
            </Container>
        </main>
    );
}