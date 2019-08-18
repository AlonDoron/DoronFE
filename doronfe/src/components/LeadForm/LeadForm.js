import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";

function LeadForm(props) {
  return (
    <form>
      <div className="field">
        <label className="label">שם פרטי</label>
        <div className="control">
          <input
            className="input is-primary"
            type="text"
            placeholder="* שם פרטי"
            name="firstName"
            onChange={props.onInputChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">שם משפחה</label>
        <div className="control">
          <input
            className="input is-primary"
            type="text"
            placeholder="* שם משפחה"
            name="lastName"
            onChange={props.onInputChange}
          />
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
          />
          <span class="icon is-right">
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
          />
          <span class="icon is-right">
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
          <span class="icon is-right">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </span>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link is-right" onClick={props.onFormSubmit}>
            שלח
          </button>
        </div>
      </div>
    </form>
  );
}

export default LeadForm;
