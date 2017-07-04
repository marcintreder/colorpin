import React, { Component } from 'react';

export default class InputPercentage extends Component {
  render() {
    return (
      <span className='b-percentage'>
        <input type='number' className='b-percentage__input' value={this.props.percent} onChange={this.props.change} min='1' max='99'/>
      </span>
    )
  }
}
