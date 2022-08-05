import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const style = {
      red: {
        color: 'red',
        fontSize: '100px',
      },
      black: {
        color: 'black',
        fontSize: '100px',
      },
    }
    const cards = {
      hearts: {
        n: '🂹',
        t: '🂺',
        j: '🂻',
        q: '🂽',
        k: '🂾',
        style: style.red,
      },
      spades: {
        n: '🂩',
        t: '🂪',
        j: '🂫',
        q: '🂭',
        k: '🂮',
        style: style.black,
      },
      diamonds: {
        n: '🃉',
        t: '🃊',
        j: '🃋',
        q: '🃍',
        k: '🃎',
        style: style.red,
      },
      clubs: {
        n: '🃙',
        t: '🃚',
        j: '🃛',
        q: '🃝',
        k: '🃞',
        style: style.black,
      },
    }
    
    return (
      <div style={cards[this.props.suit].style}>{cards[this.props.suit][this.props.rank]}</div>
    )
  }
}
