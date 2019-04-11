// src/Travel.js
import React from "react";

const Travel = props => (
  <figure>
    <h1>{props.destination}</h1>
    <h2>{props.country}</h2>
    <img src={props.photo} alt={props.destination} />
    <figcaption>
      <blockquote>{props.distance}</blockquote>
    </figcaption>
  </figure> 
);

export default Travel;