import { uniqueId } from 'lodash'
import { NoFacialHair } from './facialHair/Blank'
import * as FacialHairs from './facialHair'
import * as Accessories from './accessories'
import { Colors as FacialHairColor } from './facialHair/Colors'
import { setAvailableTypeFor } from '../../options/availableOptions'

setAvailableTypeFor &&
  setAvailableTypeFor &&
  setAvailableTypeFor('NoHair', ['facialHairType'])

export interface NoHairProps {
  facialHairType?: keyof typeof FacialHairs
  facialHairColor?: keyof typeof FacialHairColor
  accessoriesType?: keyof typeof Accessories
}

export const NoHair: React.FC<NoHairProps> = ({
  facialHairType,
  facialHairColor,
  accessoriesType,
}) => {
  const FacialHair: React.ComponentType<{
    facialHairColor?: keyof typeof FacialHairColor
  }> = facialHairType ? FacialHairs[facialHairType] : NoFacialHair
  const Accessory: React.ComponentType = accessoriesType
    ? Accessories[accessoriesType]
    : Accessories.NoAccessories
  return (
    <NoHairComponent
      FacialHair={<FacialHair facialHairColor={facialHairColor} />}
      Accessory={<Accessory />}
    />
  )
}

interface NoHairComponentProps {
  FacialHair: React.ReactElement
  Accessory: React.ReactElement
}
export const NoHairComponent: React.FC<NoHairComponentProps> = ({
  FacialHair,
  Accessory,
}) => {
  const mask1 = uniqueId('react-mask-')
  const path1 = uniqueId('react-path-')
  const filter1 = uniqueId('react-filter-')

  return (
    <g id='Top' strokeWidth='1' fillRule='evenodd' data-testid='Top/NoHair'>
      <defs>
        <rect id={path1} x='0' y='0' width='264' height='280' />
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
      <g id='Top/No-Hair' mask={`url(#${mask1})`}>
        <g transform='translate(-1.000000, 0.000000)'>
          {FacialHair}
          {Accessory}
        </g>
      </g>
    </g>
  )
}
