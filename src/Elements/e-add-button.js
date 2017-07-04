import React, { Component } from 'react';

export default class AddButton extends Component {

  render() {
    if (this.props.size === 'big') {
      return (
          <span className='b-add-button b-add-button_big' onClick={ this.props.addColor }/>
      )
    }

    else if (this.props.size === 'small') {
      return (
          <span className='b-add-button b-add-button_small' onClick={ this.props.addColor }/>
      )
    }
  }
}
