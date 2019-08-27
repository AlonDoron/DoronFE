import React from "react";
import { FontAwesomeComponent } from "../Common";

function SnifComponent(props) {
  return (
    <h3 className="subtitle is-size-6 snifComponent">
      {props.wayOfContact}:
      <FontAwesomeComponent faIcon={props.icon} />
      <a href={props.href} dir={props.dir}>
        <b>{props.hrefText}</b>
      </a>
    </h3>
  );
}

export default SnifComponent;
