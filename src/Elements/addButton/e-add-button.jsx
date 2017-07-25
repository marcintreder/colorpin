import React from 'react';
import PropTypes from 'prop-types';

import glamorous from 'glamorous';
import { AddButtonBig, AddButtonSmall } from './e-add-button.styles';

const AddButton = (props) => {
// styles for big or small AddButton depending on props.size
  const GlamAddButton = glamorous(
    props.size === 'big' ? AddButtonBig : AddButtonSmall)();

  return (<GlamAddButton onClick={props.addColor} />);
};

AddButton.propTypes = {
  size: PropTypes.oneOf(['big', 'small']).isRequired,
  addColor: PropTypes.func.isRequired,
};

export { AddButton as default };
