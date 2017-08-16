export const iconsMixin = (iconString, position, size, repeat) => {
  return `
  ${ iconString } ${ position }/${ size }px ${ repeat }`
}

export const hoverShadowMixin = () => {
  return ({ boxShadow: '3px 3px 40px rgba(246, 246, 246, .93)',
  transition: 'boxShadow .1s ease-in-out' })
}

export const initialShadowMixin = () => {
  return ('3px 3px 10px rgba(246, 246, 246, .5)');
}
