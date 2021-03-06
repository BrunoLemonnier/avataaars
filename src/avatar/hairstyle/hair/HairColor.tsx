import { AvatarModule, getAvatarModule } from '../../AvatarPart'

export interface HairColor {
  maskID: string
}

export type HairColorConstructor = React.ComponentType<HairColor>

function makeColor(name: string, color: string) {
  const HairColorComponent: HairColorConstructor = ({ maskID }) => {
    return (
      <g
        id={`Color/Hair/${name}`}
        mask={`url(#${maskID})`}
        fill={color}
        data-testid={`Color/Hair/${name}`}>
        <g transform='translate(0.000000, 0.000000) ' id='Color'>
          <rect x='0' y='0' width='264' height='280' />
        </g>
      </g>
    )
  }
  return HairColorComponent
}

export const Colors = {
  Auburn: makeColor('Auburn', '#A55728'),
  Black: makeColor('Black', '#2C1B18'),
  Blonde: makeColor('Blonde', '#B58143'),
  BlondeGolden: makeColor('BlondeGolden', '#D6B370'),
  Brown: makeColor('Brown', '#724133'),
  BrownDark: makeColor('BrownDark', '#4A312C'),
  PastelPink: makeColor('PastelPink', '#F59797'),
  Platinum: makeColor('Platinum', '#ECDCBF'),
  Red: makeColor('Red', '#C93305'),
  SilverGray: makeColor('SilverGray', '#E8E1E1'),
}

export function isHairColor(colorName: any): colorName is keyof typeof Colors {
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
