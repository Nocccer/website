import React from "react";
import { Container } from "react-bootstrap";
import { dates } from '../data/Dates';
import './Dates.css';

export function Dates() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sortedDates = [...dates].sort((a, b) => getDateTime(a.date) - getDateTime(b.date));
    const upcomingDates = sortedDates.filter((date) => getDateTime(date.date) >= today.getTime());
    const pastDates = sortedDates
        .filter((date) => getDateTime(date.date) < today.getTime())
        .reverse();

    const renderDate = (date: (typeof dates)[number]) => {
        const content = (
            <div className="date-div">
                {date.date} <b>{date.venue}</b>, {date.location} <i>{date.description}</i>
            </div>
        );
        const key = `${date.date}-${date.venue}`;

        return date.link
            ? <a key={key} className="url-link" href={date.link}>{content}</a>
            : <React.Fragment key={key}>{content}</React.Fragment>;
    };

    return (
        <>
            <Container className="date-container">
                <h2 className="date-h2">dates</h2>
                {upcomingDates.map(renderDate)}
                {upcomingDates.length === 0 &&
                    <div style={{marginBottom: '25px'}}>
                        <p className="no-upcoming-p"><i>currently in the studio!</i></p>
                        <a className="url-link" href="mailto:booking@weareisolate.com"><i>book us here</i></a>
                    </div>
                    }
                <h2 className="date-h2" >past concerts</h2>
                {pastDates.map(renderDate)}
            </Container>
        </>
    );
};

function getDateTime(date: string): number {
    const [month, day, year] = date.split('/').map(Number);
    return new Date(year, month - 1, day).getTime();
}