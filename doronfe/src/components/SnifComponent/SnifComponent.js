import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function SnifComponent(props) {
  return (
    <address className="column is-full-mobile is-one-quarter-desktop">
      <strong>{props.city}</strong>
      <FontAwesomeIcon icon={faPhone} />
      <a href={"tel:" + props.phoneToCall} className="phoneNumber">
        <b>{props.phoneToDisplay}</b>
      </a>
    </address>
  );
}

export default SnifComponent;
