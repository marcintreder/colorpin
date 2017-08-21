import glamorous from 'glamorous';
import { NavLink } from 'react-router-dom';

const SmallSwatch = glamorous(NavLink, {
  forwardProps: ['to'],
  rootEl: 'a' })(
  (props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: 50,
    height: 50,

    backgroundColor: props.hex,

    borderRadius: 3,

    color: '#444',
    textDecoration: 'none',

    transition: 'box-shadow .2s ease-in',
    ':before': {
      content: props.hex,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 20000,

      height: 20,
      width: '100%',

      top: 60,
      left: 0,
    },
    '.active': {
      '&:after': {
        content: ' ',
        position: 'relative',
        zIndex: 1000,

        display: 'inline-block',

        top: 2,
        left: -55,

        width: 10,
        height: 6,

        margin: 0,
        padding: 0,

        backgroundColor: '#444',

        borderRadius: '0 10px 10px 0',
      },
    },
  }),
);

const EmptySwatch = glamorous.li(
  (props) => ({
    position: 'relative',

    width: 50,
    height: '50px !important',

    borderRadius: 3,
    border: '1px dashed #666',

    fontSize: 12,
    color: '#666',
    textAlign: 'center',

    ':after': {
      content: props.text,
      position: 'relative',

      height: 20,
      width: 120,

      top: 60,
    },
  }),
);

export { SmallSwatch, EmptySwatch };
