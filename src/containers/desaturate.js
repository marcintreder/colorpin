import React, { Component } from 'react';
import { connect } from 'react-redux';
import tinycolor2 from 'tinycolor2';

import ColorSwatch from '../components/ColorSwatch/color-swatch';

class desaturate extends Component {

  generateDesaturateList() {
    let percentage = this.props.currentPercent;

    const color = this.props.currentColor;

    const hslObj = this.props.currentColor.hslObj;
    let colorH = hslObj.h;
    let colorL = hslObj.l * 100;
    let colorS = hslObj.s * 100;

    let desaturateArr = [];

    for(var i = 0; i < 100; i = i + percentage) {
      let currentPercent = i + '%';

      let desaturate = colorS - i;
      let desatColor = tinycolor2('hsl(' + colorH + ', ' + desaturate + '%, ' + colorL + '%)');
      let desatHex = desatColor.toHexString();
      let desatRgb = desatColor.toRgbString();
      let desatHsl = desatColor.toHslString();
      desaturateArr.push([desatHex, desatRgb, desatHsl, currentPercent]);
    }

    return desaturateArr;
  }

  renderDesaturateList(item) {
    const hex = item[0];
    const rgb = item[1];
    const hsl = item[2];
    const percentage = item[3];

    return (
      <ColorSwatch
        hex={hex}
        rgb={rgb}
        hsl={hsl}
        percentage={percentage}
        key={percentage} />
    )
  }

  render(){
    let desaturateArr = this.generateDesaturateList();

    const hex = this.props.currentColor.hex;
    const rgb = this.props.currentColor.rgb;
    const hsl = this.props.currentColor.hsl;

    const percentage = this.props.currentPercent;

    return(
      <section>
        <h2 className='section-header'>Desaturate</h2>
        <ul className='component-list'>

          <ColorSwatch hex={hex}
          rgb={rgb}
          hsl={hsl}
          percentage={'0%'} />

          {desaturateArr.map((item, i) =>
            i > 0 && desaturateArr[i][0] !== desaturateArr[i-1][0]
            ? this.renderDesaturateList(item) : '')}
        </ul>
      </section>
    );
  }
}

function mapStateToProps({ currentColor, currentPercent }) {
  return { currentColor, currentPercent }
}

export default connect(mapStateToProps)(desaturate);
