import { NoFacialHair } from './facialHair/Blank'
import { Components as FacialHairs } from './facialHair'
import { Colors as FacialHairColor } from './facialHair/Colors'
import { Components as Accessories } from './accessories'
import { Components as Hairs } from './hair'
import { Components as Headgears } from './headgear'
import { TopProps } from './Top'

export interface FacialHearProps {
  facialHairOpacity?: number
  facialHairColor?: keyof typeof FacialHairColor
  facialHairType?: keyof typeof FacialHairs
}

export interface AccessoriesProps {
  accessoriesType?: keyof typeof Accessories
  accessoriesOpacity?: number
}

export type HairStyleProps = {
  hairStyleType: keyof typeof Hairs | keyof typeof Headgears
} & TopProps &
  FacialHearProps &
  AccessoriesProps

export const HairStyle: React.FC<HairStyleProps> = (props) => {
  const { facialHairType, facialHairColor, facialHairOpacity } = props
  const FacialHair: React.ComponentType<{
    facialHairColor?: keyof typeof FacialHairColor
    opacity?: number
  }> = facialHairType ? FacialHairs[facialHairType] : NoFacialHair

  const { accessoriesType, accessoriesOpacity } = props
  const Accessory: React.ComponentType<{ opacity?: number }> = accessoriesType
    ? Accessories[accessoriesType]
    : Accessories.NoAccessories

  const { opacity, hairStyleType, color } = props
  const HairStyle: React.ComponentType<TopProps> = isHair(hairStyleType)
    ? Hairs[hairStyleType]
    : isHeadGear(hairStyleType)
    ? Headgears[hairStyleType]
    : Hairs.LongHairStraight

  return (
    <HairStyle opacity={opacity} color={color}>
      <FacialHair
        facialHairColor={facialHairColor}
        opacity={facialHairOpacity}
      />
      <Accessory opacity={accessoriesOpacity} />
    </HairStyle>
  )
}

export function isHair(
  hairStyleType: any
): hairStyleType is keyof typeof Hairs {
  return Object.keys(Hairs).includes(hairStyleType)
}

export function isHeadGear(
  hairStyleType: any
): hairStyleType is keyof typeof Headgears {
  return Object.keys(Headgears).includes(hairStyleType)
}
