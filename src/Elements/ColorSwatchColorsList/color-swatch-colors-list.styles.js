import glamorous from 'glamorous';

import { copyIcon } from '../../Styles_JS/icons';
import { iconsMixin } from '../../Styles_JS/mixins';
import { messageBackground, messageTextColor, messageIconSize } from '../../Styles_JS/colors';

export const CopyLinkCommon = glamorous.a({
  display: 'block',
  width: '95%',
  padding: 4,
  textAlign: 'left',
  border: 'none',
  cursor: 'default',
  '&:focus': {
    outline: 'none',
  },
});

// Constats use to control strings used to set active states of links
// Click on a link sets an active state of an element with a parameter
// Parameter is represented as a string 'hex', 'rgb' or 'hsl'
const hex = 'hex';
const rgb = 'rgb';
const hsl = 'hsl';

// Styling for specific links
export const CopyLinkHex = glamorous(CopyLinkCommon)(
  (props) => ({
    background: props.active === `${hex}` ? `
    ${iconsMixin(copyIcon, '82px center', messageIconSize, 'no-repeat')}` : '',
    backgroundColor: props.active === `${hex}` ? `${messageBackground}` : '',

    color: props.active === `${hex}` ? `${messageTextColor}` : '',
  }),
  {
    width: '75%',
  });

export const CopyLinkRgb = glamorous(CopyLinkCommon)(
  (props) => ({
    background: props.active === `${rgb}` ? `
    ${iconsMixin(copyIcon, '106px center', messageIconSize, 'no-repeat')}` : '',
    backgroundColor: props.active === `${rgb}` ? `${messageBackground}` : '',
    color: props.active === `${rgb}` ? `${messageTextColor}` : '',
  }));

export const CopyLinkHsl = glamorous(CopyLinkCommon)(
  (props) => ({
    background: props.active === `${hsl}` ? `
    ${iconsMixin(copyIcon, '106px center', messageIconSize, 'no-repeat')}` : '',
    backgroundColor: props.active === `${hsl}` ? `${messageBackground}` : '',
    color: props.active === `${hsl}` ? `${messageTextColor}` : '',
  }));
