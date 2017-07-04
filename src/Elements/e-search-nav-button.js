import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
      <NavLink to='/' className='b-search-nav-button-wrapper' activeClassName='b-search-nav-button_active' exact={true}>
        <span className='b-search-nav-button b-swatch-small'></span>
      </NavLink>
  )
}
