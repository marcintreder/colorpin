import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledLink, SearchButton, ActiveStyle } from './search-nav-button.styles';


const SearchNavButton = () => {
  /* ActiveStyle uses a method toString() passed through Glamor
  * Glamor is used to to pass a class with styles directly
  * to the activeClassName in router's NavLink
  */
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

export { SearchNavButton as default };
