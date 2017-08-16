import glamorous from 'glamorous';

import { messageFontSize, borders, messageTextColor, messageBackground } from '../../Styles_JS/tokens';

const AddMessage = glamorous.span(
  (props) => ({
    visibility: props.msgVisibility === 'hidden' ? 'hidden' : 'visible',
  }),
  {
    top: 25,
    right: 350,
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',

    height: 30,
    width: 160,

    backgroundColor: messageBackground,
    borderRadius: borders.radius,

    fontSize: messageFontSize,
    color: messageTextColor,
    fontWeight: 300,
    textAlign: 'center',
    textRendering: 'optimizeLegibility',
  },
);

export { AddMessage as default };
