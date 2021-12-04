export { default as baseClass } from './base-class'
export { default as firstClass } from './first-class'
export { default as secondClass } from './second-class'
export { default as transcendentClass } from './transcendent-class'
export { default as thirdClass } from './third-class'

export interface CHARACTER_ {
  name: string
  img: string
  bgColor: string
  textColor: string
  hoverBgColor: string
  characterId: number
  classId: number
  pathId: number
  hoverTextColor?: string
}
