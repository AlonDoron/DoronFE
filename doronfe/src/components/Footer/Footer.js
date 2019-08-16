import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h6 className="title is-5">הסניפים שלנו:</h6>
        <div className="columns is-mobile is-multiline">
          <address className="column is-full-mobile is-one-quarter-desktop">
            <strong>מרכז: </strong>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel: 035052323" className="phoneNumber">
              <b>03-505-2323</b>
            </a>
          </address>
          <address className="column is-full-mobile is-one-quarter-desktop">
            <strong>חיפה: </strong>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel: 048726166">
              <b>04-872-6166</b>
            </a>
          </address>
          <address className="column is-full-mobile is-one-quarter-desktop">
            <strong>נהרייה: </strong>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel: 049825555">
              <b>04-982-5555</b>
            </a>
          </address>
          <address className="column is-full-mobile is-one-quarter-desktop">
            <strong>יקנעם: </strong>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel: 049894917">
              <b>04-989-4917</b>
            </a>
          </address>
        </div>
      </div>
      <br />
      <p>&copy; כל הזכויות שמורות לדורון ענק הביטוח.</p>
    </footer>
  );
}

export default Footer;
