export const iconsMixin = (iconString, position, size, repeat) => {
  return `
  ${ iconString } ${ position }/${ size }px ${ repeat }`
}

export const iconsMixinAdvanced = (iconString, size, repeat, advancedPosition) => {
  return `
  ${ iconString } ${ advancedPosition }/${ size }px ${ repeat } `
}

export const hoverShadowMixin = () => {
  return ({ boxShadow: '3px 3px 30px rgba(246, 246, 246, .3)',
  transition: 'box-shadow .1s ease-in-out' })
}
