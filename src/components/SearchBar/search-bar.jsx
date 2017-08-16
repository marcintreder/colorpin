import React from 'react';
import PropTypes from 'prop-types';
import AddButton from '../AddButton/e-add-button';
import SearchInput from '../SearchInput/search-input';
import SearchPercentage from '../SearchPercentage/search-percentage';
import SearchBarWrapper from './search-bar.styles';
import SearchAddMessage from '../SearchAddMessage/search-add-message';

const SearchBar = (props) => {
  return (
    <SearchBarWrapper>
      <AddButton addColor={props.addColor} size="big" />
      <SearchInput term={props.searchTerm} change={props.searchChange} />
      <SearchPercentage percent={props.percent} change={props.percentChange} />
      <SearchAddMessage msgVisibility={props.message} />
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  addColor: PropTypes.func.isRequired,
  searchChange: PropTypes.func.isRequired,
  percentChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export { SearchBar as default };
