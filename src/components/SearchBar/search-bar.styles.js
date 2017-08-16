import glamorous from 'glamorous';
import { iconsMixin } from '../../Styles_JS/mixins';
import { closeIcon } from '../../Styles_JS/icons';

const searchWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'center',

  width: '100%',

  margin: '60px auto 60px auto',

  '&:after': {
    content: ' ',

    position: 'relative',

    width: 20,
    height: 20,

    top: 30,
    right: 315,

    background: `${iconsMixin(closeIcon, 'center', 8, 'no-repeat')}`,
    borderRadius: '50%',
    opacity: 0.5,
  },
});

export { searchWrapper as default };
