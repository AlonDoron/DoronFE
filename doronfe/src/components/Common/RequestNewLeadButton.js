import React from "react";
import p2p from "../../assets/p2p.png";
import { NavLink } from "react-router-dom";

function RequestNewLeadButton(props) {
  return (
    <NavLink to="/leadform">
      <img
        className="p2pImage image is-three-quarters"
        src={p2p}
        alt="p2p"
        onClick={props.onClick}
      />
    </NavLink>
  );
}

export default RequestNewLeadButton;
