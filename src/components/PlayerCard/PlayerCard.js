import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default PlayerCard;