import glamorous from 'glamorous';
import { percentageBackground,
  percentageFontSize, percentageTextColor } from '../../Styles_JS/tokens';

const Percentage = glamorous.span({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  height: 24,
  width: 24,

  margin: 6,

  backgroundColor: percentageBackground,

  borderRadius: '100%',

  color: percentageTextColor,
  fontSize: percentageFontSize,
});

export { Percentage as default };
