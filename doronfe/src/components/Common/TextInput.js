import React from "react";
import FontAwesomeComponent from "./FontAwesomeComponent";

function TextInput(props) {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className={"control" + (props.faIcon ? " has-icons-right" : "")}>
        <input
          className={"input" + (props.required ? " is-primary" : "")}
          type={props.type}
          placeholder={props.required ? "* " + props.label : props.label}
          name={props.name}
          onChange={props.onChange}
          required={props.required}
        />
        {props.faIcon && <FontAwesomeComponent faIcon={props.faIcon} />}
      </div>
    </div>
  );
}

export default TextInput;
