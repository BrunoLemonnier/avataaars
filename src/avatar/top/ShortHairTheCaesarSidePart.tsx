import * as React from 'react'
import { uniqueId } from 'lodash'
import { Colors as HairColors } from './HairColor'
import { Blank } from './facialHair/Blank'
import * as FacialHairs from './facialHair'
import * as Accessories from './accessories'
import { Colors as FacialHairColor } from './facialHair/Colors'
import { setAvailableTypeFor } from '../../options/availableOptions'

setAvailableTypeFor &&
  setAvailableTypeFor('ShortHairTheCaesarSidePart', [
    'hairColor',
    'facialHairType',
  ])

export interface ShortHairTheCaesarSidePartProps {
  hairColor?: keyof typeof HairColors
  facialHairType?: keyof typeof FacialHairs
  facialHairColor?: keyof typeof FacialHairColor
  accessoriesType?: keyof typeof Accessories
}

export const ShortHairTheCaesarSidePart: React.FC<ShortHairTheCaesarSidePartProps> = ({
  hairColor,
  facialHairType,
  facialHairColor,
  accessoriesType,
}) => {
  const FacialHair: React.ComponentType<{
    facialHairColor?: keyof typeof FacialHairColor
  }> = facialHairType ? FacialHairs[facialHairType] : Blank
  const Accessory: React.ComponentType = accessoriesType
    ? Accessories[accessoriesType]
    : Accessories.Blank
  return (
    <ShortHairTheCaesarSidePartComponent
      hairColor={hairColor}
      FacialHair={<FacialHair facialHairColor={facialHairColor} />}
      Accessory={<Accessory />}
    />
  )
}

interface ShortHairTheCaesarSidePartComponentProps {
  hairColor?: keyof typeof HairColors
  FacialHair: React.ReactElement
  Accessory: React.ReactElement
}
export const ShortHairTheCaesarSidePartComponent: React.FC<ShortHairTheCaesarSidePartComponentProps> = ({
  FacialHair,
  hairColor,
  Accessory,
}) => {
  const mask1 = uniqueId('react-mask-')
  const mask2 = uniqueId('react-mask-')
  const path1 = uniqueId('react-path-')
  const path2 = uniqueId('react-path-')
  const filter1 = uniqueId('react-filter-')

  const HairColor = hairColor ? HairColors[hairColor] : HairColors.BrownDark

  return (
    <g
      id='Top'
      strokeWidth='1'
      fillRule='evenodd'
      data-testid='Top/ShortHairTheCaesarSidePart'>
      <defs>
        <rect id={path1} x='0' y='0' width='264' height='280' />
        <path
          d='M82.0179468,24.3784638 C74.9860629,23.6847351 66.6573358,23.2514721 58.3126144,23.245568 C39.0082164,23.2319099 19.618222,25.4833872 16,28 C6.29594493,35.2480719 2.53726005,62.445722 3,64 C2.67275588,65.2226722 1.34685629,65.488448 1,64 C0.280821545,53.7019177 1,1.72563718 58,1 C115,0.274362825 115.719178,53.7019177 115,64 C114.653144,65.488448 113.327244,65.2226722 113,64 C113.46274,62.445722 109.704055,35.2480719 100,28 C98.2407122,26.7763475 92.7526689,25.6101897 85.3587425,24.7390449 L89,16 L82.0179468,24.3784638 Z'
          id={path2}
        />
        <filter
          x='-0.8%'
          y='-2.0%'
          width='101.5%'
          height='108.0%'
          filterUnits='objectBoundingBox'
          id={filter1}>
          <feOffset
            dx='0'
            dy='2'
            in='SourceAlpha'
            result='shadowOffsetOuter1'
          />
          <feColorMatrix
            values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
            type='matrix'
            in='shadowOffsetOuter1'
            result='shadowMatrixOuter1'
          />
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1} />
      </mask>
      <g id='Mask' />
      <g id='Top/Short-Hair/The-Caesar-+-Side-Part' mask={`url(#${mask1})`}>
        <g transform='translate(-1.000000, 0.000000)'>
          {FacialHair}
          <g
            id='Hair'
            strokeWidth='1'
            fillRule='evenodd'
            transform='translate(75.000000, 34.000000)'>
            <mask id={mask2} fill='white'>
              <use xlinkHref={'#' + path2} />
            </mask>
            <use id='Caesar' fill='#28354B' xlinkHref={'#' + path2} />
            <HairColor maskID={mask2} />
          </g>
          {Accessory}
        </g>
      </g>
    </g>
  )
}
