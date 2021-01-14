import * as React from 'react'

export interface ClotheColorProps {
  maskID: string
}

export type ClotheColorConstructor = React.FC<ClotheColorProps>

export function makeColor(name: string, color: string) {
  const ClotheColorComponent: ClotheColorConstructor = ({ maskID }) => {
    return (
      <g
        id={`Color/Clothe/${name}`}
        data-testid={`Color/Clothe/${name}`}
        mask={`url(#${maskID})`}
        fill={color}>
        <g transform='translate(-32.000000, 0.000000)' id='Color'>
          <rect x='0' y='0' width='264' height='244' />
        </g>
      </g>
    )
  }
  return ClotheColorComponent
}

export const Black = makeColor('Black', '#262E33')
export const Blue01 = makeColor('Blue01', '#65C9FF')
export const Blue02 = makeColor('Blue02', '#5199E4')
export const Blue03 = makeColor('Blue03', '#25557C')
export const Gray01 = makeColor('Gray01', '#E6E6E6')
export const Gray02 = makeColor('Gray02', '#929598')
export const Heather = makeColor('Heather', '#3C4F5C')
export const PastelBlue = makeColor('PastelBlue', '#B1E2FF')
export const PastelGreen = makeColor('PastelGreen', '#A7FFC4')
export const PastelOrange = makeColor('PastelOrange', '#FFDEB5')
export const PastelRed = makeColor('PastelRed', '#FFAFB9')
export const PastelYellow = makeColor('PastelYellow', '#FFFFB1')
export const Pink = makeColor('Pink', '#FF488E')
export const Red = makeColor('Red', '#FF5C5C')
export const White = makeColor('White', '#FFFFFF')

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
