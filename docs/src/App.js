import React from "react";
import { CgGhostCharacter } from "react-icons/cg";
import { IoLogoOctocat } from "react-icons/io";
import { SiDatadog } from "react-icons/si";
import { GiHumanPyramid } from "react-icons/gi";

import Player from "./Components/Player";
import PlayerInfo from "./Components/PlayerInfo";
import Card from "./Components/Card";

function App() {
  const pfps = {
    ghost: CgGhostCharacter,
    cat: IoLogoOctocat,
    dog: SiDatadog,
    human: GiHumanPyramid,
  };
  const ghost = () => <h2>Hi</h2>;
  return (
    <div className="App">
      Hello World
      <Player pfp={pfps.human} tricksWon={2} />
      <PlayerInfo name="Kitty" tricksWon={1} pfp={pfps.cat} team="red" />
      <PlayerInfo name="Doggo" tricksWon={2} pfp={pfps.dog} team="blue" />
      <PlayerInfo name="King Boo" tricksWon={1} pfp={pfps.ghost} team="red" />
      <br />
      <Card />
    </div>
  );
}

export default App;
