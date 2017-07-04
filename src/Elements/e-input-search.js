import React, { Component } from 'react';

export default class InputSearch extends Component {
  render() {
    return (
      <span className='b-search'>
        <input type='search' className='b-search__input' value={ this.props.term } onChange={ this.props.change } spellCheck='false'/>
      </span>
    )
  }
}
