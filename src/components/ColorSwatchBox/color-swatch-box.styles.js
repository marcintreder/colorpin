import glamorous from 'glamorous';
import { colors } from '../../Styles_JS/tokens';

const ColorSwatchBoxColor = glamorous.div(
  (props) => ({
    backgroundColor: props.background !== '#ffffff' ? props.background : colors.whiteBase,
    borderColor: props.background !== '#ffffff' ? props.background : colors.silverBase,
  }),
  {
    display: 'flex',
    alignSelf: 'center',
    height: 100,
    width: 140,

    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderRadius: '2px 0 0 2px',
    '&:focus': {
      outline: 'none',
    },
  },
);

export { ColorSwatchBoxColor as default };
