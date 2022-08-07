import React from "react";
import { CgGhostCharacter } from "react-icons/cg";
import { IoLogoOctocat } from "react-icons/io";
import { SiDatadog } from "react-icons/si";
import { GiHumanPyramid } from "react-icons/gi";

import Player from "./Components/Player";
import PlayerInfo from "./Components/PlayerInfo";
import Card from "./Components/Card";
import {
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE,
  HEARTS,
  SPADES,
  CLUBS,
  DIAMONDS,
} from "./Constants";

function Board() {
  const pfps = {
    ghost: CgGhostCharacter,
    cat: IoLogoOctocat,
    dog: SiDatadog,
    human: GiHumanPyramid,
  };
  return (
    <div className="Board">
      Hello World
      <Player pfp={pfps.human} tricksWon={2} />
      <PlayerInfo name="Kitty" tricksWon={1} pfp={pfps.cat} team="red" />
      <PlayerInfo name="Doggo" tricksWon={2} pfp={pfps.dog} team="blue" />
      <PlayerInfo name="King Boo" tricksWon={1} pfp={pfps.ghost} team="red" />
      <br />
      <Card suit={HEARTS} rank={QUEEN} />
      <Card suit={SPADES} rank={ACE} />
      <Card suit={DIAMONDS} rank={KING} />
      <Card suit={CLUBS} rank={JACK} />
    </div>
  );
}

export default Board;