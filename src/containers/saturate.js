import React, { Component } from 'react';
import { connect } from 'react-redux';
import tinycolor2 from 'tinycolor2';

import ColorSwatch from '../components/c-color-swatch';

class Saturate extends Component {

  generateSaturateList() {
    let percentage = this.props.currentPercent;

    const hslObj = this.props.currentColor.hslObj;
    let colorH = hslObj.h;
    let colorL = hslObj.l * 100;
    let colorS = hslObj.s * 100;

    let saturateArr = [];

    for(var i = 0; i < 100; i = i + percentage) {
      let currentPercent = i + '%';

      let saturate = colorS + i;
      let satColor = tinycolor2('hsl(' + colorH + ', ' + saturate + '%, ' + colorL + '%)');
      let satHex = satColor.toHexString();
      let satRgb = satColor.toRgbString();
      let satHsl = satColor.toHslString();
      saturateArr.push([satHex, satRgb, satHsl, currentPercent]);
    }

    return saturateArr;
  }

  renderSaturateList(item) {
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
    let saturateArr = this.generateSaturateList();

    const hex = this.props.currentColor.hex;
    const rgb = this.props.currentColor.rgb;
    const hsl = this.props.currentColor.hsl;

    const percentage = this.props.currentPercent;

    return(
      <section>
        <h2 className='section-header'>Saturate</h2>
        <ul className='component-list'>

          <ColorSwatch hex={hex}
          rgb={rgb}
          hsl={hsl}
          percentage={'0%'} />

          {saturateArr.map((item, i) =>
            i > 0 && saturateArr[i][0] !== saturateArr[i-1][0]
            ? this.renderSaturateList(item) : '')}
        </ul>
      </section>
    );
  }
}

function mapStateToProps({ currentColor, currentPercent }) {
  return { currentColor, currentPercent }
}

export default connect(mapStateToProps)(Saturate);
