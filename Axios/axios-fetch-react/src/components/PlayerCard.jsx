import React from "react";
import { useState } from "react";
function PlayerCard(props) {
  return (
    <div className="pcard">
      <div className="titlebox">
        <h3>{props.info.player_name}</h3>
        <h4>{props.info.team}</h4>
      </div>
      <img className="logo" src="https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg"/>
      <div className="statBox">
        <p>Points: {props.info.PTS}</p>
        <p>Assists: {props.info.AST}</p>
        <p>Steals: {props.info.STL}</p>
        <p>Blocks:{props.info.BLK}</p>
        <p>Games Started: {props.info.games_started}</p>
        <p>Threes Made: {props.info.three_fg}</p>
        <p>{props.info.AST}</p>
      </div>
    </div>
  );
}

export default PlayerCard;
