import React from 'react';
import StyledNavLink from './nav-search-button.styles';

const SearchNavButton = () => {
  return (
    <StyledNavLink
      to="/"
      exact />
  );
};

export { SearchNavButton as default };
