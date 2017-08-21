import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ColorSwatchSmall from '../../components/ColorSwatchSmall/color-swatch-small';
import DeleteButton from '../../components/DeleteButton/delete-button';

class ColorSwatchSmallContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        visibility: 'hidden', // state responsible for showing delete button
      };
    }

  render(){

    const hex = this.props.hex;
    const url = hex.replace(/#/g, ''); // deletes # for url

    const showDelete = (e, status) => {
      e.stopPropagation();
      this.setState({visibility: status})
    };

    return (
      <div
        onMouseEnter={(e) => showDelete(e, 'visible')}
        onMouseLeave={(e) => showDelete(e, 'hidden')} >

        <ColorSwatchSmall
          hex={this.props.hex}
          link={`/color/${url}`}
          activeClassName="b-saved-colors_active" />

        <DeleteButton visibility={this.state.visibility} delete={this.props.delete}/>
      </div>
    );
  }
};

export { ColorSwatchSmallContainer as default };
