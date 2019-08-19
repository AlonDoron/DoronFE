import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faPhone,
  faEnvelope,
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";

function ContactUsForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div className="field">
        <label className="label">שם מלא</label>
        <div className="control has-icons-right">
          <input
            className="input is-primary"
            type="text"
            placeholder="* שם מלא"
            name="fullName"
            onChange={props.onInputChange}
            required
          />
          <span className="icon is-right">
            <FontAwesomeIcon icon={faUserAlt} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">מספר טלפון</label>
        <div className="control has-icons-right">
          <input
            className="input is-primary"
            type="number"
            placeholder="* מספר טלפון"
            name="phoneNumber"
            onChange={props.onInputChange}
            required
          />
          <span className="icon is-right">
            <FontAwesomeIcon icon={faPhone} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">דואר אלקטרוני</label>
        <div className="control has-icons-right">
          <input
            className="input is-primary"
            type="email"
            placeholder="* דואר אלקטרוני"
            name="mailAddress"
            onChange={props.onInputChange}
            required
          />
          <span className="icon is-right">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">משהו נוסף?</label>
        <div className="control has-icons-right">
          <textarea
            className="input textarea"
            type="text"
            placeholder="פרטים נוספים"
            name="otherDetails"
            onChange={props.onInputChange}
          />
          <span className="icon is-right">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </span>
        </div>
      </div>
      <div className="control">
        <input className="button is-link" type="submit" value="שלח" />
      </div>
    </form>
  );
}

export default ContactUsForm;
