import { AvatarModule, getAvatarModule } from './AvatarPart'

export interface SkinProps {
  maskID: string
  skinOpacity?: number
}

export function makeSkinColor(name: string, color: string) {
  const SkinColor: React.ComponentType<SkinProps> = ({ maskID = '' }) => {
    return (
      <g id={`Color/Skin/${name}`} mask={`url(#${maskID})`} fill={color}>
        <g transform='translate(0.000000, 0.000000)' id='Color'>
          <rect x='0' y='0' width='264' height='280' />
        </g>
      </g>
    )
  }
  return SkinColor
}

export const Colors = {
  Tanned: makeSkinColor('Tanned', '#FD9841'),
  Yellow: makeSkinColor('Yellow', '#F8D25C'),
  Pale: makeSkinColor('Pale', '#FFDBB4'),
  Light: makeSkinColor('Light', '#EDB98A'),
  Brown: makeSkinColor('Brown', '#D08B5B'),
  DarkBrown: makeSkinColor('DarkBrown', '#AE5D29'),
  Black: makeSkinColor('Black', '#614335'),
}

export default Colors

export const Components = Colors

export const AvatarModules = Object.entries(Colors).reduce(
  (modules, [name, Component]) => {
    modules[name] = getAvatarModule({ Component })
    return modules
  },
  {} as Record<string, AvatarModule>
)
