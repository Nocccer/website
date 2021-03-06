import React from "react";
import { Container } from "react-bootstrap";
import { dates } from '../data/Dates';
import './Dates.css';

export function Dates() {
    const time = new Date();
    let upcoming = false;

    return (
        <>
            <Container className="date-container">
                <h2 className="date-h2">dates</h2>
                {dates.map((date) => {
                    const current_time = [time.getMonth() + 1, time.getDate(), time.getFullYear()].join('/');
                    if (checkDate(date.date, current_time))
                    {
                        upcoming = true;
                        let tmp_date = <div className="date-div"> {date.date} <b> {date.venue} </b>, {date.location} <i> {date.description} </i></div>;
                        if (date.link?.length !== 0)
                            return (<a className="url-link" href={date.link}>{tmp_date}</a>);
                        else
                            return tmp_date;
                    }
                    else
                    {
                        return <></>;
                    }
                })}
                {!upcoming && 
                    <div style={{marginBottom: '25px'}}>
                        <p className="no-upcoming-p"><i>currently in the studio!</i></p>
                        <a className="url-link" href="mailto:booking@weareisolate.com"><i>book us here</i></a>
                    </div>
                    }
                <h2 className="date-h2" >past concerts</h2>
                {dates.map((date) => {
                    const current_time = [time.getMonth() + 1, time.getDate(), time.getFullYear()].join('/');
                    if (!checkDate(date.date, current_time))
                        return <div className="date-div"> {date.date} <b> {date.venue} </b>, {date.location} <i> {date.description} </i></div>;
                    else
                        return <></>;
                })}
            </Container>
        </>
    );
};

function checkDate(target: string, base: string) {
    const [month, day, year] = base.split('/').map(Number);
    const [tmonth, tday, tyear] = target.split('/').map(Number);

    let isGE = false;

    if (tyear > year)
        isGE = true;
    if (tyear === year && tmonth > month)
        isGE = true;
    if (tyear === year && tmonth === month && tday > day)
        isGE = true;

    return isGE;
};