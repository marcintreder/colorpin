import glamorous from 'glamorous';
import { messageTextColor, messageBorderColor, messageTextColorDark,
  messageBorderColorDark, messageFontSize, borders } from '../../Styles_JS/tokens';

const ColorSwatchCopiedMsg = glamorous.span(
  (props) => ({
    visibility: props.visibility === 'hidden' ? 'hidden' : 'visible',
    color: props.luminosity > 79 ? messageTextColorDark : messageTextColor,
    borderColor: props.luminosity > 79 ? messageBorderColorDark : messageBorderColor,
  }),
  {
    display: 'block',
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

export { ColorSwatchCopiedMsg as default };
