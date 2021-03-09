import {
  AvatarModules as ClothesModules,
  Components as ClothesComponents,
} from './clothes'
import {
  AvatarModules as FaceModules,
  Components as FaceComonents,
} from './face'
import {
  AvatarModules as StyleModules,
  Components as StyleComonents,
} from './hairstyle'

export const AvatarModules = {
  ...ClothesModules,
  ...FaceModules,
  ...StyleModules,
}
export const Components = {
  ...ClothesComponents,
  ...FaceComonents,
  ...StyleComonents,
}
export * from './Avatar'
export * from './Skin'
export * from './AvatarStyle'

export { default } from './Avatar'
