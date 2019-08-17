import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
          />
        </div>
      </div>
      <div className="field">
        <label className="label">מספר טלפון</label>
        <div className="control">
          <input
            className="input is-primary"
            type="number"
            placeholder="* מספר טלפון"
            name="phoneNumber"
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faPhone} />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">דואר אלקטרוני</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder=" דואר אלקטרוני "
            name="mailAddress"
          />
        </div>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-small" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check" />
          </span>
        </div>
      </div>
    </form>
  );
}

export default LeadForm;
