import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledLink, SearchButton, ActiveStyle } from './search-nav-button.styles';


export default () => {
  return (
    <StyledLink>
      <NavLink
        to="/"
        activeClassName={ActiveStyle.toString()}
        exact >
        <SearchButton />
      </NavLink>
    </StyledLink>
  );
};
