import React from 'react';
import PropTypes from 'prop-types';
import { SearchPercentageWrapper, Input } from './search-percentage.styles';

const SearchPercentage = (props) => {
  return (
    <SearchPercentageWrapper>
      <Input
        type="number"
        value={props.percent}
        onChange={props.change}
        min="1"
        max="99" />
    </SearchPercentageWrapper>
  );
};

SearchPercentage.propTypes = {
  percent: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired,
};

export { SearchPercentage as default };
