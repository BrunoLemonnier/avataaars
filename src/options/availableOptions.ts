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

export type OptionType =
  | 'skinColor'
  //
  | 'topType'
  | 'accessoriesType'
  | 'hatColor'
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

const availableTypeByOption = new Map<string, OptionType[]>()

const ComponentsByType = {
  //
  skinColor: SkinColors,
  accessoriesType: AccessoriesType,
  //
  topType: Tops,
  hatColor: HatColors,
  hairColor: HairColors,
  facialHairType: FacialHairs,
  facialHairColor: FacialHairColors,
  //
  clotheType: Clothes,
  clotheColor: ClotheColors,
  graphicType: ClotheGraphics,
  //
  eyeType: Eyes,
  eyebrowType: EyeBrows,
  mouthType: Mouths,
}

export type Option = typeof ComponentsByType[keyof typeof ComponentsByType]

export const getOptionsByType = (optionType: OptionType) => {
  return Object.keys(ComponentsByType[optionType])
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
