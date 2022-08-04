import React from 'react'
import PlayerInfo from "./PlayerInfo"

export default function Player() {
    const style = {
        border: '2px solid black',
        padding: "2px",
    }
  return (
    <div style={style}>
        Player
        <PlayerInfo />
    </div>
  )
}
