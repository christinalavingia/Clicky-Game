import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
  <div className="card" onClick={() = props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image)} />
    </div>
  </div>
);

export default PlayerCard;
