import { OptionType } from '../options'

export interface AvatarModule {
  category?: string
  associatedTypes?: OptionType[]
  Component: React.ComponentType
}

export interface AvatarPart extends AvatarModule {
  name: string
}

export function getAvatarModule(module: any): AvatarModule {
  return {
    category: module.category,
    associatedTypes: module.associatedTypes,
    Component: module.Component,
  }
}
