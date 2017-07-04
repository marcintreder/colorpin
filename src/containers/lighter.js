import React, { Component } from 'react';
import { connect } from 'react-redux';
import tinycolor2 from 'tinycolor2';

import ColorSwatch from '../components/c-color-swatch';

class Lighter extends Component {

  generateLighterList() {
    let percentage = this.props.currentPercent;

    const hslObj = this.props.currentColor.hslObj;
    let colorH = hslObj.h;
    let colorL = hslObj.l * 100;
    let colorS = hslObj.s * 100;

    let lighterArr = [];

    for(var i = 0; i < 100; i = i + percentage) {
      let currentPercent = i + '%';

      let lighter = colorL + i;
      let lightColor = tinycolor2('hsl(' + colorH + ', ' + colorS + '%, ' + lighter + '%)');
      let lightHex = lightColor.toHexString();
      let lightRgb = lightColor.toRgbString();
      let lightHsl = lightColor.toHslString();
      lighterArr.push([lightHex, lightRgb, lightHsl, currentPercent]);
    }

    return lighterArr;
  }

  renderLighterList(item) {
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
    let lighterArr = this.generateLighterList();

    const hex = this.props.currentColor.hex;
    const rgb = this.props.currentColor.rgb;
    const hsl = this.props.currentColor.hsl;

    const percentage = this.props.currentPercent;

    return(
      <section>
        <h2 className='section-header'>Lighter</h2>
        <ul className='component-list'>

          <ColorSwatch hex={hex}
          rgb={rgb}
          hsl={hsl}
          percentage='0%' />

          {lighterArr.map((item, i) =>
            i > 0 && lighterArr[i][0] !== lighterArr[i-1][0]
            ? this.renderLighterList(item) : '')}
        </ul>
      </section>
    );
  }
}

function mapStateToProps({ currentColor, currentPercent }) {
  return { currentColor, currentPercent }
}

export default connect(mapStateToProps)(Lighter);
