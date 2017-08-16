import glamorous from 'glamorous';

import { initialShadowMixin, hoverShadowMixin } from '../../Styles_JS/mixins';

const Swatch = glamorous.li({
  display: 'block',
  position: 'relative',

  height: 170,
  width: 140,

  margin: '0 0 30px 30px',

  borderRadius: 3,

  listStyle: 'none',

  boxShadow: initialShadowMixin(),
  '&:hover': hoverShadowMixin(),
});

export { Swatch as default };
