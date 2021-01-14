import * as React from 'react'

export interface FacialHairColorProps {
  maskID: string
}

export type FacialHairColorConstructor = React.FC<FacialHairColorProps>

export function makeColor(name: string, color: string) {
  const FacialHairColorComponent: FacialHairColorConstructor = ({ maskID }) => {
    return (
      <g
        id={`Color/FacialHair/${name}`}
        data-testid={`Color/FacialHair/${name}`}
        mask={`url(#${maskID})`}
        fill={color}>
        <g transform='translate(-32.000000, 0.000000)' id='Color'>
          <rect x='0' y='0' width='264' height='244' />
        </g>
      </g>
    )
  }
  return FacialHairColorComponent
}

export const Colors = {
  Auburn: makeColor('Auburn', '#A55728'),
  Black: makeColor('Black', '#2C1B18'),
  Blonde: makeColor('Blonde', '#B58143'),
  BlondeGolden: makeColor('BlondeGolden', '#D6B370'),
  Brown: makeColor('Brown', '#724133'),
  BrownDark: makeColor('BrownDark', '#4A312C'),
  Platinum: makeColor('Platinum', '#ECDCBF'),
  Red: makeColor('Red', '#C93305'),
}
