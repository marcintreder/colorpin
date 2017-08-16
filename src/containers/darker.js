import React, { Component } from 'react';
import { connect } from 'react-redux';
import tinycolor2 from 'tinycolor2';

import ColorSwatch from '../components/ColorSwatch/color-swatch';

class Darker extends Component {

  generateDarkerList() {
    let percentage = this.props.currentPercent;

    const hslObj = this.props.currentColor.hslObj;
    let colorH = hslObj.h;
    let colorL = hslObj.l * 100;
    let colorS = hslObj.s * 100;

    let darkerArr = [];

    for(var i = 0; i < 100; i = i + percentage) {
      let currentPercent = i + '%';

      let darker = colorL - i;
      let darkColor = tinycolor2('hsl(' + colorH + ', ' + colorS + '%, ' + darker + '%)');
      let darkHex = darkColor.toHexString();
      let darkRgb = darkColor.toRgbString();
      let darkHsl = darkColor.toHslString();
      darkerArr.push([darkHex, darkRgb, darkHsl, currentPercent]);
    }

    return darkerArr;
  }

  renderDarkerList(item) {
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
    let darkerArr = this.generateDarkerList();

    const hex = this.props.currentColor.hex;
    const rgb = this.props.currentColor.rgb;
    const hsl = this.props.currentColor.hsl;

    const percentage = this.props.currentPercent;


    return(
      <section>
        <h2 className='section-header'>Darker</h2>
        <ul className='component-list'>

          <ColorSwatch hex={hex}
          rgb={rgb}
          hsl={hsl}
          percentage={'0%'} />

          {darkerArr.map((item, i) =>
            i > 0 && darkerArr[i][0] !== darkerArr[i-1][0]
            ? this.renderDarkerList(item) : '')}

        </ul>
      </section>
    );
  }
}

function mapStateToProps({ currentColor, currentPercent }) {
  return { currentColor, currentPercent }
}

export default connect(mapStateToProps)(Darker);
