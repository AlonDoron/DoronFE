import React from "react";
import FontAwesomeComponent from "../common/FontAwesomeComponent";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function SnifComponent(props) {
  return (
    <address className="column is-full-mobile is-one-quarter-desktop">
      <strong>{props.city}</strong>
      <FontAwesomeComponent faIcon={faPhone} />
      <a href={"tel:" + props.phoneToCall} className="phoneNumber">
        <b>{props.phoneToDisplay}</b>
      </a>
    </address>
  );
}

export default SnifComponent;
