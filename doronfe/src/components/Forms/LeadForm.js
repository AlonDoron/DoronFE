import React from "react";
import { TextInput } from "../Common";
import {
  faPhone,
  faEnvelope,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";

function LeadForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        label="שם פרטי"
        type="text"
        name="firstName"
        onChange={props.onInputChange}
        faIcon={faUserAlt}
        error={props.errors.firstName}
        required
      />
      <TextInput
        label="שם משפחה"
        type="text"
        name="lastName"
        onChange={props.onInputChange}
        faIcon={faUserAlt}
        error={props.errors.lastName}
        required
      />
      <TextInput
        label="מספר טלפון"
        type="number"
        name="phoneNumber"
        onChange={props.onInputChange}
        faIcon={faPhone}
        error={props.errors.phoneNumber}
        required
      />
      <TextInput
        label="דואר אלקטרוני"
        type="email"
        name="mailAddress"
        onChange={props.onInputChange}
        faIcon={faEnvelope}
        error={props.errors.mailAddress}
        required
      />
    </form>
  );
}

export default LeadForm;
