import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FontAwesomeComponent(props) {
  return (
    <span className="icon is-right">
      <FontAwesomeIcon icon={props.faIcon} />
    </span>
  );
}

export default FontAwesomeComponent;
