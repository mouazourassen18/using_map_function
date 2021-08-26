import React from "react";
import Avatar from "./Avatar";
import Para from "./Para";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar im={props.img} />
      </div>

      <Para tel={props.tel} email={props.email} />
    </div>
  );
}

export default Card;
