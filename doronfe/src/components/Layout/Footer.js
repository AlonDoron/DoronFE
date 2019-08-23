import React from "react";
import { SnifComponent } from "../Common";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h6 className="title is-5">הסניפים שלנו:</h6>
        <div className="columns is-mobile is-multiline">
          <SnifComponent
            city="מרכז"
            phoneToCall="035052323"
            phoneToDisplay="03-505-2323"
          />
        </div>
      </div>
      <br />
      <p>&copy; כל הזכויות שמורות לדורון ענק הביטוח.</p>
    </footer>
  );
}

export default Footer;
