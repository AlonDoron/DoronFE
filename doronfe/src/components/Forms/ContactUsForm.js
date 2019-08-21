import React from "react";
import { TextInput, TextAreaInput } from "../Common";
import {
  faPhone,
  faEnvelope,
  faQuoteLeft,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";

function ContactUsForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <TextInput
        label="שם מלא"
        type="text"
        name="fullName"
        onChange={props.onInputChange}
        faIcon={faUserAlt}
        required
      />
      <TextInput
        label="מספר טלפון"
        type="number"
        name="phoneNumber"
        onChange={props.onInputChange}
        faIcon={faPhone}
        required
      />
      <TextInput
        label="דואר אלקטרוני"
        type="email"
        name="mailAddress"
        onChange={props.onInputChange}
        faIcon={faEnvelope}
        required
      />
      <TextAreaInput
        specialInput="textarea"
        label="נושא הפניה"
        type="text"
        name="requestSubject"
        onChange={props.onInputChange}
        faIcon={faQuoteLeft}
        required
      />
      <div className="control">
        <input className="button is-link" type="submit" value="שלח" />
      </div>
    </form>
  );
}

export default ContactUsForm;
