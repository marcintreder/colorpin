import glamorous from 'glamorous';
import { messageTextColor, messageBorderColor, messageTextColorDark,
  messageBorderColorDark, messageFontSize, borders } from '../../Styles_JS/tokens';

const CopiedMessage = glamorous.span(
  (props) => ({
    display: props.visibility === 'hidden' ? 'none' : 'block',
    color: props.luminosity > 79 ? messageTextColorDark : messageTextColor,
    borderColor: props.luminosity > 79 ? messageBorderColorDark : messageBorderColor,
  }),
  {
    position: 'absolute',
    zIndex: 1000,
    opacity: 1,
    top: 45,
    left: 34,

    width: 70,
    height: 20,

    borderRadius: borders.radius,
    borderWidth: borders.width,
    borderStyle: borders.style,

    padding: '5px 2px 1px 2px',

    fontSize: messageFontSize,
    fontWeight: 'lighter',
    textAlign: 'center',
    textRendering: 'optimizeLegibility',
  });

export { CopiedMessage as default };
