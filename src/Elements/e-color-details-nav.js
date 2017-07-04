import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ColorDetailsNav extends Component {

  render() {

    const urlFunctions = `/color/${this.props.color}`;
    const urlComplimentary = `/color/${this.props.color}/complimentary`;
    const urlAccessability = `/color/${this.props.color}/accessability`;

    return(
      <ul className='b-colors-details-nav'>
        <NavLink to={ urlFunctions } activeClassName='b-colors-details-nav__item_active-1' exact={true}>
          <li className='b-colors-details-nav__item'>Color Functions</li>
        </NavLink>
        <NavLink to={ urlComplimentary } activeClassName='b-colors-details-nav__item_active-2'>
          <li className='b-colors-details-nav__item'>Complimentary Colors</li>
        </NavLink>
        <NavLink to={ urlAccessability } activeClassName='b-colors-details-nav__item_active-3'>
          <li className='b-colors-details-nav__item'>Accessability</li>
        </NavLink>
      </ul>
    )
  }
}
