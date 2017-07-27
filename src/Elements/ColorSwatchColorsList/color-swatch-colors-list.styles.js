/* eslint-disable */
import glamorous from 'glamorous';

import { copyIcon } from '../../Styles_JS/icons';
import { iconsMixin } from '../../Styles_JS/mixins';

export const CopyLinkCommon = glamorous.a({
  display: 'block',
  width: '95%',
  padding: 4,
  textAlign: 'left',
  border: 'none',
  cursor: 'default',
});


export const CopyLinkHex = glamorous(CopyLinkCommon)(
  (props) => ({
    background: props.active === 'hex' ? `
    ${iconsMixin(copyIcon, '82px center', 13, 'no-repeat')}` : '',
    backgroundColor: props.active === 'hex' ? '#006cff' : '',
    color: props.active === 'hex' ? '#ffffff' : '',
  }),
  {
    width: 100,
  });

export const CopyLinkRgb = glamorous(CopyLinkCommon)(
  (props) => ({
    background: props.active === 'rgb' ? `
    ${iconsMixin(copyIcon, '106px center', 13, 'no-repeat')}` : '',
    backgroundColor: props.active === 'rgb' ? '#006cff' : '',
    color: props.active === 'rgb' ? '#ffffff' : '',
  }));

export const CopyLinkHsl = glamorous(CopyLinkCommon)(
  (props) => ({
    background: props.active === 'hsl' ? `
    ${iconsMixin(copyIcon, '106px center', 13, 'no-repeat')}` : '',
    backgroundColor: props.active === 'hsl' ? '#006cff' : '',
    color: props.active === 'hsl' ? '#ffffff' : '',
  }));
