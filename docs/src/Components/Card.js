import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      red: {
        color: "red",
        fontSize: "100px",
      },
      black: {
        color: "black",
        fontSize: "100px",
      },
    };
    const cards = {
      hearts: {
        9: "🂹",
        10: "🂺",
        J: "🂻",
        Q: "🂽",
        K: "🂾",
        A: "🂱",
        style: style.red,
      },
      spades: {
        9: "🂩",
        10: "🂪",
        J: "🂫",
        Q: "🂭",
        K: "🂮",
        A: "🂡",
        style: style.black,
      },
      diamonds: {
        9: "🃉",
        10: "🃊",
        J: "🃋",
        Q: "🃍",
        K: "🃎",
        A: "🃁",
        style: style.red,
      },
      clubs: {
        9: "🃙",
        10: "🃚",
        J: "🃛",
        Q: "🃝",
        K: "🃞",
        A: "🃑",
        style: style.black,
      },
    };

    return (
      <div style={cards[this.props.suit].style}>
        {cards[this.props.suit][this.props.rank]}
      </div>
    );
  }
}
