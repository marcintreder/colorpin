import glamorous from 'glamorous';
import searchTextColor from '../../Styles_JS/tokens';

const SearchInputWrapper = glamorous.span({
  borderBottom: '1px solid #f3f3f3',
});

const Input = glamorous.input({
  width: 264,
  height: '100%',

  padding: '0 5px 0 5px',

  border: 0,
  outline: 'none',

  fontSize: 59,
  fontWeight: 100,
  color: searchTextColor,
  textAlign: 'center',

  WebkitAppearance: 'none',
});

export { SearchInputWrapper, Input };
