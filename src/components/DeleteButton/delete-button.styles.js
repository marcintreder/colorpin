import glamorous from 'glamorous';
import { closeIcon } from '../../Styles_JS/icons';
import { iconsMixin } from '../../Styles_JS/mixins';

const StyledDeleteButton = glamorous.span(
  (props) => ({
    visibility: props.visibility === 'visible' ? 'visible' : 'hidden',
  }),
  {
    position: 'relative',
    display: 'inline-block',
    zIndex: 10000,

    opacity: 1,

    top: -55,
    left: 40,

    width: 20,
    height: 20,

    margin: 0,

    background: //  Icons Mixin imported from Mixin files - returns CSS
    `#fff
    ${iconsMixin(closeIcon, 'center', 8, 'no-repeat')}`,

    borderRadius: '50%',
    border: '1px solid #f3f3f3',

    ':hover': {
      backgroundColor: '#f3f3f3',
    },
  },
);

export { StyledDeleteButton as default };
