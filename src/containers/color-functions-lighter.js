import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPercent } from '../actions/index';
import ColorSwatch from '../components/ColorSwatch/color-swatch';
import SearchPercentage from './search-percentage';

import tinycolor2 from 'tinycolor2';

class ColorFunctionsLighter extends Component {
  generateLighterList() {
    let percentage = this.props.currentPercent;

    const t = tinycolor2(this.props.color);

    const hslObj = t.toHsl();
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

    const t = tinycolor2(this.props.color);


    const hex = t.toHexString();
    const rgb = t.toRgbString();
    const hsl = t.toHslString();

    const percentage = 10;

    return(
      <section>
        <h2 className='section-header'>Lighter</h2>
        <ul className='component-list'>

          <ColorSwatch hex={hex}
          rgb={rgb}
          hsl={hsl}
          percentage={'0%'} />

          {lighterArr.map((item, i) =>
            i > 0 && lighterArr[i][0] !== lighterArr[i-1][0]
            ? this.renderLighterList(item) : '')}
        </ul>
      </section>
    );
  }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPercent }, dispatch);
  }

  function mapStateToProps({ currentPercent }) {
    return { currentPercent }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ColorFunctionsLighter);
