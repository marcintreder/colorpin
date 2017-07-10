import React, { Component } from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';
import { addIcon } from '../JSS_Core/icons';
import { iconsMixin, hoverShadowMixin } from '../JSS_Core/mixins';
import { colors } from '../JSS_Core/colors';

jss.setup(preset())

class AddButton extends Component {
// This button expects string indicating the size - big or small.
  render() {

    let type = () => {
      if (this.props.size === 'big') { return this.props.classes.big }
      else if (this.props.size === 'small') { return this.props.classes.small }
      // AddButton cannot be rendered with any other size than big or small
      else { console.log('error - wrong type of AddButton set by props size') }
    }

    return <span className= { type() } onClick={ this.props.addColor }/>
  }
}

// JSS styles object.
const styles = {
  addButton: { //Common Button Style
    display: 'block',
    borderRadius: 3,

  },
  small: { //Small Button Style
    extend: 'addButton',
    position: 'absolute',

    top: 102,
    left: 110,

    width: 24,
    height: 24,

    background: //Icons Mixin imported from Mixin files - returns CSS
      `#fff
      ${ iconsMixin(addIcon, 'center', 10, 'no-repeat') }`,
    opacity: .5,

    '&:hover': {
      opacity: 1,
      border: `1px solid ${ colors.silverBase }`
    }

  },
  big: { //Big Button Style
    extend: 'addButton',

    width: 50,
    height: 50,
    margin: '12px 10px 0 0',

    background:
      `${ colors.silverBase }
      ${ iconsMixin(addIcon, 'center', 12, 'no-repeat') }`,
    '&:hover': hoverShadowMixin(),
  }
}

export default injectSheet(styles)(AddButton)
