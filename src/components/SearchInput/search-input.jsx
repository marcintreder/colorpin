import React from 'react';
import PropTypes from 'prop-types';
import { SearchInputWrapper, Input } from './search-input.styles';

const SearchInput = (props) => {
  return (
    <SearchInputWrapper>
      <Input
        type="search"
        value={props.term}
        onChange={props.change}
        spellCheck="false" />
    </SearchInputWrapper>
  );
};

SearchInput.propTypes = {
  term: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export { SearchInput as default };
