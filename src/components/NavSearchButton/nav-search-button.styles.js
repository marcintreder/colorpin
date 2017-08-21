import glamorous from 'glamorous';
import { NavLink } from 'react-router-dom';
import { searchIcon } from '../../Styles_JS/icons';
import { iconsMixin } from '../../Styles_JS/mixins';

const StyledNavLink = glamorous(NavLink)({
  display: 'block',

  height: 60,
  width: 50,

  marginBottom: 10,

  background: `#e6e6e6 ${iconsMixin(searchIcon, 'center', 18, 'no-repeat')}`,

  borderRadius: 3,

  transition: 'box-shadow .2s ease-in',

  '&:hover': {
    boxShadow: '3px 3px 10px rgba(153, 153, 153, .6)',
  },
  '.active': {
    '&:after': {
      content: ' ',
      display: 'inline-block',
      position: 'relative',
      top: 15,
      left: -36,

      width: 10,
      height: 6,

      margin: 0,
      padding: 0,

      backgroundColor: '#444',

      borderRadius: '0 10px 10px 0',
    },
  },
});

export { StyledNavLink as default };
