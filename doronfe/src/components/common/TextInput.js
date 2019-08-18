import React from "react";

// TODO: Add PROPS!
function TextInput(props) {
  return (
    <div className="field">
      <label className="label">שם פרטי</label>
      <div className="control">
        <input
          className="input is-primary"
          type="text"
          placeholder="* שם פרטי"
          name="firstName"
          onChange={props.onInputChange}
        />
      </div>
    </div>
  );
}

export default TextInput;
