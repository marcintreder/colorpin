import React from 'react';
import PropTypes from 'prop-types';
import AddButton from '../AddButton/e-add-button';
import InputSearch from '../../Elements/e-input-search';
import InputPercentage from '../../Elements/e-input-percentage';
import SearchBarWrapper from './search-bar.styles';

const SearchBar = (props) => {
  return (
    <SearchBarWrapper>
      <AddButton addColor={props.addColor} size="big" />
      <InputSearch term={props.searchTerm} change={props.searchChange} />
      <InputPercentage percent={props.percent} change={props.percentChange} />
      <span className="b-color-search-warning">Color already on the list</span>
      <span className="b-color-search-success">Color added!</span>
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  addColor: PropTypes.func.isRequired,
  searchChange: PropTypes.func.isRequired,
  percentChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export { SearchBar as default };
