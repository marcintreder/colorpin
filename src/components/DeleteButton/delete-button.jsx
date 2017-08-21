import React from 'react';
import PropTypes from 'prop-types';
import StyledDeleteButton from './delete-button.styles';

const DeleteButton = (props) => {
  return (
    <StyledDeleteButton visibility={props.visibility} onClick={props.delete} />
  );
};

DeleteButton.propTypes = {
  visibility: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired,
};

export { DeleteButton as default };
