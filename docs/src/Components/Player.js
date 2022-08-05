import React from "react";
import PlayerInfo from "./PlayerInfo";

export default function Player({ tricksWon, pfp }) {
  const style = {
    border: "2px solid black",
    padding: "2px",
  };
  return (
    <div style={style}>
      Player
      <br />
      <PlayerInfo name="Tom" tricksWon={tricksWon} pfp={pfp} team="blue" />
    </div>
  );
}
