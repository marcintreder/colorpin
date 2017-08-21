import glamorous from 'glamorous';

const NavWrapper = glamorous.nav({
  display: 'flex',
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: 110,
  minWidth: 110,
  height: '100vh',

  padding: '20px 0 0 0',

  backgroundColor: '#fdfdfd',

  border: '1px solid $f3f3f3',
});

const SavedColorsHeader = glamorous.h3({
  display: 'block',

  width: 110,
  height: 20,

  marginBottom: 20,
  marginTop: 10,

  backgroundColor: '#f3f3f3',

  fontSize: 8,
  color: '#333',
  lineHeight: 2.2,
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: 1,
});

const ColorsList = glamorous.ul({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: '100vh',
  overflow: 'auto',

  width: '100%',

  paddingBottom: 20,
  '> li': {
    marginBottom: 15,
    height: 80,
  }
})

export { SavedColorsHeader, ColorsList, NavWrapper }
