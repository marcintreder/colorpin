// Small swatch is expecting: hex, url and delete function as props

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SmallSwatch extends Component {

  render() {
    let hex = this.props.data;
    let id = this.props.id;
    const url = hex.replace(/\#/g, ''); // deletes # for url

    return (
      <div className='b-swatch-small-wrapper' onMouseLeave={ (e) => this.hideDelete(e) }>
      <NavLink to={ `/color/${url}` } className='b-swatch-small-link' activeClassName='b-saved-colors_active'>
        <span className='b-swatch-small' style={{ backgroundColor: hex }} onMouseOver={(e) => this.showDelete(e)} />
        <span className='b-hex'>{hex}</span>
      </NavLink>
        <span className='b-swatch-small-delete' onClick={(e) => { this.props.delete(id, e); }} onMouseLeave={(e) => this.hideDelete(e)} />
      </div>
    )
  }

  showDelete(e) {
    let parent = e.target.parentNode;
    let deleteButton = parent.nextElementSibling;

    if ( deleteButton && deleteButton.classList.contains('b-swatch-small-delete')) {
      deleteButton.style.visibility = 'visible';
      deleteButton.style.opacity = '1';
    }
  }

  hideDelete(e) {
    let element = e.target;

    if ( element.classList.contains('b-swatch-small-link') ) {
      let deleteButton = element.nextElementSibling;
      deleteButton.style.opacity = '0';
    }

    else if ( element.classList.contains('b-hex') || element.classList.contains('b-swatch-small') ) {
      let parent = element.parentNode;
      let deleteButton = parent.nextElementSibling;
      deleteButton.style.opacity = '0';
    }

    else if ( element.className === 'b-swatch-small-wrapper' ) {
      let deleteButton = element.childNodes[1];
      deleteButton.style.opacity = '0';
    }

    else if ( element.className === 'b-swatch-small-delete') {
      let deleteButton = element;
      deleteButton.style.opacity = '0';
    }
  }
}
