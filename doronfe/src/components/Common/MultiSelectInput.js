import React from "react";
import Select from "react-select";

function MultiSelectInput(props) {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className={props.required ? " is-primary" : ""}>
        <Select
          type={props.type}
          name={props.name}
          options={props.options}
          onChange={props.onChange}
          placeholder={props.required ? props.label + " (חובה)" : props.label}
          isMulti
        />
      </div>
      {props.error && <p className="help is-danger">{props.error}</p>}
    </div>
  );
}

export default MultiSelectInput;
