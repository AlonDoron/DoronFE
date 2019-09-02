import React from "react";
import { NavLink } from "react-router-dom";

function BituahInfoCard(props) {
  return (
    <NavLink className="column is-one-third" to={props.to}>
      <div className="card">
        <div className="card-header">
          <p className="card-header-title is-centered">{props.title}</p>
        </div>
        <figure className="image">
          <img src={props.image} alt={props.textContent} />
        </figure>
        <div className="card-content">
          <div className="content is-centered">{props.textContent}</div>
        </div>
      </div>
    </NavLink>
  );
}

export default BituahInfoCard;
