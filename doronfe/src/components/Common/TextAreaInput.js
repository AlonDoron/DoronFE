import React from "react";
import FontAwesomeComponent from "./FontAwesomeComponent";

function TextAreaInput(props) {
  let wrapperClass = "textarea input";
  if (props.error && props.error.length > 0) {
    wrapperClass += " is-danger";
  }
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className={"control" + (props.faIcon ? " has-icons-right" : "")}>
        <textarea
          className={wrapperClass + (props.required ? " is-primary" : "")}
          type={props.type}
          placeholder={props.required ? "* " + props.label : props.label}
          name={props.name}
          onChange={props.onChange}
          required={props.required}
        />
        {props.faIcon && <FontAwesomeComponent faIcon={props.faIcon} />}
      </div>
      {props.error && <p className="help is-danger">{props.error}</p>}
    </div>
  );
}

export default TextAreaInput;
