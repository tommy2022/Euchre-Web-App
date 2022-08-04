import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const style = {
        border: '2px solid black',
    }
    return (
      <div style={style}>Card</div>
    )
  }
}
