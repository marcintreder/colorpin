import React from 'react';
import PropTypes from 'prop-types';
import AddMessage from './search-add-message.styles';

const SearchAddMessage = (props) => {
  return (
    <AddMessage
      msgVisibility={props.msgVisibility}>
      { /* eslint-disable no-nested-ternary */ }
      {props.msgVisibility === 'success' ? 'Color added!' :
        props.msgVisibility === 'warning' ? 'Color already on the list' : ''}
    </AddMessage>
  );
};

SearchAddMessage.propTypes = {
  msgVisibility: PropTypes.oneOf(['hidden', 'warning', 'success']).isRequired,
};

export { SearchAddMessage as default };
