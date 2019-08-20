import React from "react";
import { TextInput, TextAreaInput } from "../Common";
import {
  faPhone,
  faEnvelope,
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";

function ContactUsForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <TextInput
        label="שם פרטי"
        type="text"
        name="firstName"
        onChange={props.onInputChange}
        required
      />
      <TextInput
        label="שם משפחה"
        type="text"
        name="lastName"
        onChange={props.onInputChange}
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
        label="פרטי הפניה"
        type="text"
        name="otherDetails"
        onChange={props.onInputChange}
        faIcon={faQuoteLeft}
      />
      <div className="control">
        <input className="button is-link" type="submit" value="שלח" />
      </div>
    </form>
  );
}

export default ContactUsForm;
