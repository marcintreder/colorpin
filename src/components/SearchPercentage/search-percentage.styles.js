import glamorous from 'glamorous';
import searchTextColor from '../../Styles_JS/tokens';


const SearchPercentageWrapper = glamorous.span({
  borderBottom: '1px solid #f3f3f3',

  '&:after': {
    content: '%',
    position: 'relative',
    display: 'block',

    top: -690,
    left: 96,

    width: 40,
    height: 1,

    color: searchTextColor,
    fontSize: 33,
    lineHeight: 40,
    fontWeight: 100,
  },
});

const Input = glamorous.input({
  width: 150,

  padding: '0 5px 0 5px',

  border: 0,
  outline: 'none',

  fontSize: 59,
  fontWeight: 100,
  color: searchTextColor,
  textAlign: 'center',

  WebkitAppearance: 'none',

});

export { SearchPercentageWrapper, Input };
