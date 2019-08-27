import React from "react";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

import { SnifComponent } from "../Common";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h6 className="title is-5">הסניפים שלנו:</h6>
        <div className="columns is-mobile is-multiline">
          <SnifComponent
            wayOfContact="טלפון"
            href="tel: 035052323"
            hrefText="03-505-2323"
            icon={faPhone}
          />
          <SnifComponent
            wayOfContact="מייל"
            href="mailto: 303@5052323.co.il"
            hrefText="303@5052323.co.il"
            dir="ltr"
            icon={faEnvelope}
          />
          <SnifComponent
            wayOfContact="סניפינו בכתובת"
            href="https://goo.gl/maps/aNWecYx25BwNninQ6"
            hrefText="סוקולוב 94, חולון"
            icon={faMapMarkerAlt}
          />
        </div>
      </div>
      <br />
      <p>&copy; כל הזכויות שמורות לדורון ענק הביטוח.</p>
    </footer>
  );
}

export default Footer;
