import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TextAreaInput(props) {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className={"control" + (props.faIcon ? " has-icons-right" : "")}>
        <textarea
          className={"input textarea" + (props.required ? " is-primary" : "")}
          type={props.type}
          placeholder={props.required ? "* " + props.label : props.label}
          name={props.name}
          onChange={props.onInputChange}
          required={props.required}
        />
        {props.faIcon && (
          <span className="icon is-right">
            <FontAwesomeIcon icon={props.faIcon} />
          </span>
        )}
      </div>
    </div>
  );
}

export default TextAreaInput;
