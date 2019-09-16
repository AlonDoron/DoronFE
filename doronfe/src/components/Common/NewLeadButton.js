import React from "react";
import p2p from "../../assets/images/p2p.png";
import { NavLink } from "react-router-dom";

function NewLeadButton(props) {
  return (
    <NavLink to="/lead">
      <img
        className="borderBlink p2pImage"
        src={p2p}
        alt="p2p"
        onClick={props.onClick}
      />
    </NavLink>
  );
}

export default NewLeadButton;
