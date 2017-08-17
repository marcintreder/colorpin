import glamorous from 'glamorous';
import { css } from 'glamor';

const StyledLink = glamorous.div({
  maxHeight: 50,
  marginBottom: 10,
});

const SearchButton = glamorous.span({
  display: 'block',
  backgroundColor: '#e6e6e6',

  height: 50,
  width: 50,

  maxHeight: 60,

  borderRadius: 3,

  transition: 'box-shadow .2s ease-in',

  '&:hover': {
    boxShadow: '3px 3px 10px rgba(153, 153, 153, .6)',
  },
});

const ActiveStyle = css({
  '&:after': {
    content: ' ',
    position: 'relative',

    display: 'inline-block',

    top: -37,
    left: -34,

    width: 10,
    height: 6,

    margin: 0,
    padding: 0,

    backgroundColor: '#444',

    borderRadius: '0 10px 10px 0',
  },
});

export { StyledLink, SearchButton, ActiveStyle };
