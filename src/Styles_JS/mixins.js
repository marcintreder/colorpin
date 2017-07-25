export const iconsMixin = function(iconString, position, size, repeat) {
  return `
  ${ iconString } ${ position }/${ size }px ${ repeat }`
}

export const hoverShadowMixin = function() {
  return ({ boxShadow: '3px 3px 30px rgba(246, 246, 246, .3)',
  transition: 'box-shadow .1s ease-in-out' })
}
