import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./Release.css";
import { isReleaseUpcoming, ReleaseConf } from "../data/Releases";
import { OffCanvas } from "./OffCanvas";

interface Props extends ReleaseConf {
  featured?: boolean;
}

export function Release({
  name,
  picture,
  date,
  description,
  streams,
  buys,
  colorStyle,
  featured = false,
}: Props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const openLinks = () => setShow(true);
  const [month, day, year] = date.split("/");
  const dateTime = `${year}-${month}-${day}`;
  const releaseDate = new Date(Number(year), Number(month) - 1, Number(day));
  const isUpcoming = isReleaseUpcoming(date);
  const hasLinks = isUpcoming
    ? streams.some((stream) => stream.preSaveLink) ||
      buys.some((buy) => buy.preOrderLink)
    : streams.some((stream) => stream.link) ||
      buys.some((buy) => buy.link);
  const releaseStatus = isUpcoming ? "Coming soon" : "Last Release";
  const formattedDate = releaseDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <Card
        className={`release-card${featured ? " release-card-featured" : ""}`}
      >
        {featured && (
          <span className="release-card-kicker">{releaseStatus}</span>
        )}
        <button
          className="release-card-artwork"
          type="button"
          onClick={hasLinks ? openLinks : undefined}
          disabled={!hasLinks}
          aria-label={hasLinks ? `Explore ${name} links` : `${name} artwork`}
        >
          <Card.Img
            variant="top"
            src={picture}
            className="release-card-image"
            alt={`${name} artwork`}
          />
        </button>
        {featured ? (
          <div className="release-card-content">
            <Card.Title as="h2">{name}</Card.Title>
            <Card.Subtitle as="time" dateTime={dateTime}>
              {formattedDate}
            </Card.Subtitle>
            {description && (
              <Card.Text className="release-card-description">
                {description}
              </Card.Text>
            )}
          </div>
        ) : (
          <>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{date}</Card.Subtitle>
            <Card.Body>
              {description && <Card.Text>{description}</Card.Text>}
            </Card.Body>
          </>
        )}
      </Card>

      <OffCanvas
        name={name}
        show={show}
        streams={streams}
        buys={buys}
        isUpcoming={isUpcoming}
        closeFunction={handleClose}
        image={picture}
        colors={colorStyle}
      />
    </>
  );
}
