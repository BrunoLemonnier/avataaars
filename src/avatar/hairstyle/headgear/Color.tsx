import { AvatarModule, getAvatarModule } from '../../AvatarPart'

export interface Props {
  maskID: string
}

export type HatColorConstructor = React.ComponentType<Props>
function makeColor(name: string, color: string) {
  const HatColorComponent: HatColorConstructor = ({ maskID }) => {
    return (
      <g
        id={`Color/HeadgearColor/${name}`}
        data-testid={`Color/HeadgearColor/${name}`}
        mask={`url(#${maskID})`}
        fillRule='evenodd'
        fill={color}>
        <rect id='🖍Color' x='0' y='0' width='264' height='280' />
      </g>
    )
  }
  return HatColorComponent
}

export const Colors = {
  Black: makeColor('Black', '#262E33'),
  Blue01: makeColor('Blue01', '#65C9FF'),
  Blue02: makeColor('Blue02', '#5199E4'),
  Blue03: makeColor('Blue03', '#25557C'),
  Gray01: makeColor('Gray01', '#E6E6E6'),
  Gray02: makeColor('Gray02', '#929598'),
  Heather: makeColor('Heather', '#3C4F5C'),
  PastelBlue: makeColor('PastelBlue', '#B1E2FF'),
  PastelGreen: makeColor('PastelGreen', '#A7FFC4'),
  PastelOrange: makeColor('PastelOrange', '#FFDEB5'),
  PastelRed: makeColor('PastelRed', '#FFAFB9'),
  PastelYellow: makeColor('PastelYellow', '#FFFFB1'),
  Pink: makeColor('Pink', '#FF488E'),
  Red: makeColor('Red', '#FF5C5C'),
  White: makeColor('White', '#FFFFFF'),
}

export function isHeadGearColor(
  colorName: any
): colorName is keyof typeof Colors {
  return Object.keys(Colors).includes(colorName)
}

export const Components = Colors

export const AvatarModules = Object.entries(Colors).reduce(
  (modules, [name, Component]) => {
    modules[name] = getAvatarModule({ Component })
    return modules
  },
  {} as Record<string, AvatarModule>
)
