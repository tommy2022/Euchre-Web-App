import React from 'react'
import Player from "./Components/Player"
import Card from "./Components/Card"

function App() {
  return (
    <div className="App">
      Hello World
      <Player />
      <br />
      <Card 
        suit="hearts"
        rank="q"
      />

    </div>
  );
}

export default App;
