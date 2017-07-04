import React, { Component } from 'react';
import tinycolor2 from 'tinycolor2';

export default class ColorDetailsHeader extends Component {

   render() {
     const t = tinycolor2(this.props.color);
     const rgba = t.toRgbString();
     const hsl = t.toHslString();
     const hex = '#' + this.props.color;

     return(
       <header className='b-colors-details-header'>
         <h1 className='b-colors-details-header__hex b-copy-code_clipboard'
           data-clipboard-text={hex}
           onClick={(e) => {this.handleClick(e)}} >
           {hex}
         </h1>
         <div className='b-colors-details-subheader'>
           <span className='b-copy-code_clipboard' data-clipboard-text={rgba}
             onClick={(e) => {this.handleClick(e)}}>{rgba}</span>
           <span className='b-copy-code_clipboard' data-clipboard-text={hsl}
             onClick={(e) => {this.handleClick(e)}}>{hsl}</span>
         </div>
      </header>
     )
   }

   handleClick(e) {
     const element = e.target;
     e.persist();

     if( element.className === 'b-colors-details-header__hex b-copy-code_clipboard') {
       e.target.classList.add('b-colors-details-header__hex_copied');
       setTimeout(() => {
         e.target.classList.remove('b-colors-details-header__hex_copied');
       }, 800);
     }

     else if( element.parentNode.className === 'b-colors-details-subheader') {
       e.target.classList.add('b-colors-details-subheader_copied');
       setTimeout(() => {
         e.target.classList.remove('b-colors-details-subheader_copied');
       }, 800);
     }
   }
}
