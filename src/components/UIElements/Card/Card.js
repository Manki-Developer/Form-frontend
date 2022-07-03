import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card-custom ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
