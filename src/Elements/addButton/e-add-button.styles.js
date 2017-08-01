import glamorous from 'glamorous';

import { addIcon } from '../../Styles_JS/icons';
import { iconsMixin, hoverShadowMixin } from '../../Styles_JS/mixins';
import { buttonBackground, buttonBorderBackground } from '../../Styles_JS/tokens';


export const AddButtonCommon = glamorous.button({
  display: 'block',
  borderRadius: 4,
  border: 'none',
  '&:focus': {
    outline: 'none',
  },
});

export const AddButtonBig = glamorous(AddButtonCommon)({
  width: 50,
  height: 50,
  margin: '12px 10px 0 0',

  background:
  `${buttonBackground}
  ${iconsMixin(addIcon, 'center', 12, 'no-repeat')}`,
  '&:hover': hoverShadowMixin(),
});

export const AddButtonSmall = glamorous(AddButtonCommon)({
  position: 'absolute',

  top: 102,
  left: 110,

  width: 24,
  height: 24,

  background: //  Icons Mixin imported from Mixin files - returns CSS
  `#fff
  ${iconsMixin(addIcon, 'center', 10, 'no-repeat')}`,
  opacity: 0.5,

  '&:hover': {
    opacity: 1,
    border: `1px solid ${buttonBorderBackground}`,
  },
});
