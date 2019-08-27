import React from "react";
import { TextInput, MultiSelectInput } from "../Common";

import {
  faPhone,
  faEnvelope,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";

function LeadForm(props) {
  const insuranceOptions = [
    { value: "חובה בלבד", label: "חובה בלבד" },
    { value: "מקיף + חובה", label: "מקיף + חובה" },
    { value: "צד ג + חובה", label: "צד ג + חובה" },
    { value: "עסק", label: "עסק" },
    { value: "דירה", label: "דירה" },
    { value: "נסיעות לחול", label: "נסיעות לחול" }
  ];

  return (
    <form onSubmit={props.onFormSubmit}>
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
      <MultiSelectInput
        label="אני מעוניין בביטוח מסוג"
        name="selectedInsurances"
        onChange={props.onMultiSelectChange}
        error={props.errors.selectedInsurances}
        options={insuranceOptions}
        required
      />
      <div className="control">
        <input className="button is-info" type="submit" value="שלח" />
      </div>
    </form>
  );
}

export default LeadForm;
