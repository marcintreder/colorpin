import glamorous from 'glamorous';
import { messageTextColor, messageTextColorDark, messageFontSize,
  messageBorderColor, messageBorderColorDark, borders } from '../../Styles_JS/tokens';

const AddMessage = glamorous.span(
  (props) => ({
    display: props.msgVisibility === 'hidden' ? 'none' : 'flex',
    borderColor: props.luminosity >= 79 ? messageBorderColorDark : messageBorderColor,
    color: props.luminosity >= 79 ? messageTextColorDark : messageTextColor,
  }),
  {
    top: 40,
    right: 13,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',

    height: 30,
    width: 114,

    borderWidth: borders.width,
    borderStyle: borders.style,
    borderRadius: borders.radius,

    fontSize: messageFontSize,
    fontWeight: 300,
    textAlign: 'center',
    textRendering: 'optimizeLegibility',
  },
);

export { AddMessage as default };
