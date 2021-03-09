import { AvatarModules as HairStyles } from '../avatar/hairstyle'
import { AvatarModules as Accessories } from '../avatar/hairstyle/accessories'
import { AvatarModules as FacialHairs } from '../avatar/hairstyle/facialHair'
import { AvatarModules as Clothes } from '../avatar/clothes'
import { AvatarModules as Eyes } from '../avatar/face/eyes'
import { AvatarModules as EyeBrows } from '../avatar/face/eyebrow'
import { AvatarModules as Mouths } from '../avatar/face/mouth'
import { AvatarModules as SkinColors } from '../avatar/Skin'
import { AvatarModules as HairColors } from '../avatar/hairstyle/hair/HairColor'
import { AvatarModules as HeadgearColor } from '../avatar/hairstyle/headgear/Color'
import { AvatarModules as FacialHairColors } from '../avatar/hairstyle/facialHair/Colors'
import { AvatarModules as ClotheColors } from '../avatar/clothes/Colors'
import { AvatarModules as ClotheGraphics } from '../avatar/clothes/Graphics'
import type { AvatarModule, AvatarPart } from '../avatar/AvatarPart'

export type OptionType =
  | 'skinColor'
  //
  | 'hairStyleType'
  | 'accessoriesType'
  | 'headgearColor'
  //
  | 'hairColor'
  | 'facialHairType'
  | 'facialHairColor'
  //
  | 'clotheType'
  | 'clotheColor'
  | 'graphicType'
  //
  | 'eyeType'
  | 'eyebrowType'
  | 'mouthType'

export function getComponentsPackageByType(
  optionType: OptionType
): AvatarPart[] {
  const compPackage = componentPackage(optionType)
  return Object.entries(compPackage).map(([key, value]) => ({
    name: key,
    ...value,
  })) as any[]
}

export function componentPackage(optionType: OptionType) {
  let componentPckg: Record<string, AvatarModule> = {}
  switch (optionType) {
    case 'hairStyleType':
      componentPckg = HairStyles
      break
    case 'accessoriesType':
      componentPckg = Accessories
      break
    case 'facialHairType':
      componentPckg = FacialHairs
      break
    case 'eyeType':
      componentPckg = Eyes
      break
    case 'eyebrowType':
      componentPckg = EyeBrows
      break
    case 'mouthType':
      componentPckg = Mouths
      break
    case 'clotheType':
      componentPckg = Clothes
      break
    case 'skinColor':
      componentPckg = SkinColors
      break
    case 'hairColor':
      componentPckg = HairColors
      break
    case 'headgearColor':
      componentPckg = HeadgearColor
      break
    case 'facialHairColor':
      componentPckg = FacialHairColors
      break
    case 'clotheColor':
      componentPckg = ClotheColors
      break
    case 'graphicType':
      componentPckg = ClotheGraphics
      break
  }
  return componentPckg
}
