import type { OptionType } from './Option'
import { Colors as SkinColors } from '../avatar/Skin'
import * as Tops from '../avatar/top'
import * as AccessoriesType from '../avatar/top/accessories'
import { Colors as HairColors } from '../avatar/top/HairColor'
import { Colors as HatColors } from '../avatar/top/HatColor'
import * as FacialHairs from '../avatar/top/facialHair'
import { Colors as FacialHairColors } from '../avatar/top/facialHair/Colors'
import * as Clothes from '../avatar/clothes'
import { Colors as ClotheColors } from '../avatar/clothes/Colors'
import { Graphics as ClotheGraphics } from '../avatar/clothes/Graphics'
import * as Eyes from '../avatar/face/eyes'
import * as EyeBrows from '../avatar/face/eyebrow'
import * as Mouths from '../avatar/face/mouth'

const availableTypeByOption = new Map<string, OptionType[]>()

export const optionsByType = {
  //
  skinColor: Object.keys(SkinColors),
  accessoriesType: Object.keys(AccessoriesType),
  //
  topType: Object.keys(Tops),
  hatColor: Object.keys(HatColors), // hatColor or  hairColor
  hairColor: Object.keys(HairColors),
  facialHairType: Object.keys(FacialHairs),
  facialHairColor: Object.keys(FacialHairColors),
  //
  clotheType: Object.keys(Clothes),
  clotheColor: Object.keys(ClotheColors),
  graphicType: Object.keys(ClotheGraphics),
  //
  eyeType: Object.keys(Eyes),
  eyebrowType: Object.keys(EyeBrows),
  mouthType: Object.keys(Mouths),
}

export const getOptionsByType = (optionType: OptionType) => {
  return optionsByType[optionType]
}

export const setAvailableTypeFor = (
  selectedOption: string,
  availableTypes: OptionType[]
) => {
  availableTypeByOption.set(selectedOption, availableTypes)
}

export const getAvailableSubTypesFor = (
  selectedOption: string
): OptionType[] => {
  return availableTypeByOption.get(selectedOption)!
}

export const getAvailableRootTypes = (): OptionType[] => {
  return getAvailableSubTypesFor('Avatar')
}

export const setAvailableRootTypes = (availableOptions: OptionType[]) => {
  return (
    setAvailableTypeFor &&
    setAvailableTypeFor &&
    setAvailableTypeFor('Avatar', availableOptions)
  )
}
