import React, { Component } from 'react';
import { connect } from 'react-redux';
import tinycolor2 from 'tinycolor2';

import Lighter from './lighter';
import Darker from './darker';
import Saturate from './saturate';
import Desaturate from './desaturate';



class ColorsList extends Component {

  render() {
    const color = this.props.currentColor.hex;
    const t = tinycolor2(color);
    const hex = this.props.currentColor.hex;
    const rgb = this.props.currentColor.rgb;
    const hsl = this.props.currentColor.hsl;

    const firstPercent = '0%';

    const firstColor = [hex, rgb, hsl, firstPercent];

    return(
      <section>
        <Lighter firstColor = { firstColor } />
        <Darker firstColor = { firstColor } />
        <Saturate firstColor = { firstColor } />
        <Desaturate firstColor = { firstColor } />
      </section>
    )
  }
}

function mapStateToProps({ currentColor, currentPercent }) {
  return { currentColor, currentPercent }
}

export default connect(mapStateToProps)(ColorsList);
