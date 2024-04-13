import React from "react";
import icon1 from "../images/gameproduct-detailimg/icon2.png";

const GameFeaturesCards = ({ data ,number}) => {
  console.log(number);
  return (
    <div className="gamefeature_card">
      <div className="box_card1">
        <h2 className="bg_number">0{number+1}</h2>
        <h6>{data?.title}</h6>
        <p>{data?.content}</p>
      </div>
    </div>
  );
};

export default GameFeaturesCards;
