import React, { Component } from 'react';
import ColorSwatch from '../components/c-color-swatch';
import tinycolor2 from 'tinycolor2';

export default class ColorComplimentary extends Component {

  generateAnalogous() {
    const analogArr = tinycolor2(this.props.color).analogous();
    return analogArr.map((t) => {
      return (
        {
          hex: t.toHexString(),
         rgb: t.toRgbString(),
         hsl: t.toHslString()
        }
      )
    });
  }

  generateMonochrom() {
    const monochromArr = tinycolor2(this.props.color).monochromatic();
    return monochromArr.map((t) => {
      return (
        {
          hex: t.toHexString(),
         rgb: t.toRgbString(),
         hsl: t.toHslString()
        }
      )
    });
  }

  generateSplit() {
    const splitArr = tinycolor2(this.props.color).splitcomplement();
    return splitArr.map((t) => {
      return (
        {
          hex: t.toHexString(),
         rgb: t.toRgbString(),
         hsl: t.toHslString()
        }
      )
    });
  }

  generateTriad() {
    const triadArr = tinycolor2(this.props.color).triad();
    return triadArr.map((t) => {
      return (
        {
          hex: t.toHexString(),
         rgb: t.toRgbString(),
         hsl: t.toHslString()
        }
      )
    });
  }

  generateTetrad() {
    const tetradArr = tinycolor2(this.props.color).tetrad();
    return tetradArr.map((t) => {
      return (
        {
          hex: t.toHexString(),
         rgb: t.toRgbString(),
         hsl: t.toHslString()
        }
      )
    });
  }

  generateComplement() {
    const t = tinycolor2(this.props.color).complement();
      return (
        {
          hex: t.toHexString(),
         rgb: t.toRgbString(),
         hsl: t.toHslString()
        }
      )
  }

  renderSwatch(item, i) {
    const hex = item.hex;
    const rgb = item.rgb;
    const hsl = item.hsl;

    return (
      <ColorSwatch
        hex={hex}
        rgb={rgb}
        hsl={hsl}
        key={i} />
    )
  }

  render() {
    const analogArr = this.generateAnalogous();
    const monochromArr = this.generateMonochrom();
    const splitArr = this.generateSplit();
    const triadArr = this.generateTriad();
    const tetradArr = this.generateTetrad();
    const complementArr = this.generateComplement();

    return(
      <section className='b-color-details-all__wrapper'>
        <h2 className='section-header'>Analogous Colors</h2>
        <ul className='component-list'>
          {analogArr.map((item, i) => {
            return this.renderSwatch(item, i)
          })}
        </ul>
        <h2 className='section-header'>Monochromatic Colors</h2>
          <ul className='component-list'>
            {monochromArr.map((item, i) => {
              return this.renderSwatch(item, i)
            })}
          </ul>
        <h2 className='section-header'>Split Complement Colors</h2>
          <ul className='component-list'>
            {splitArr.map((item, i) => {
              return this.renderSwatch(item, i)
            })}
          </ul>
        <h2 className='section-header'>Triad</h2>
          <ul className='component-list'>
            {triadArr.map((item, i) => {
              return this.renderSwatch(item, i)
            })}
          </ul>
        <h2 className='section-header'>Tetrad</h2>
          <ul className='component-list'>
            {tetradArr.map((item, i) => {
              return this.renderSwatch(item, i)
            })}
          </ul>
        <h2 className='section-header'>Complement</h2>
          <ul className='component-list'>
                <ColorSwatch
                  hex={complementArr.hex}
                  rgb={complementArr.rgb}
                  hsl={complementArr.hsl}
                />
          </ul>
      </section>
    )
  }
}
