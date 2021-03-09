import * as NoFacialHair from './Blank'
import * as BeardLight from './BeardLight'
import * as BeardMajestic from './BeardMajestic'
import * as BeardMedium from './BeardMedium'
import * as MoustacheFancy from './MoustacheFancy'
import * as MoustacheMagnum from './MoustacheMagnum'
import { getAvatarModule } from '../../AvatarPart'

export const Components = {
  NoFacialHair: NoFacialHair.Component,
  BeardLight: BeardLight.Component,
  BeardMajestic: BeardMajestic.Component,
  BeardMedium: BeardMedium.Component,
  MoustacheFancy: MoustacheFancy.Component,
  MoustacheMagnum: MoustacheMagnum.Component,
}

export const AvatarModules = {
  NoFacialHair: getAvatarModule(NoFacialHair),
  BeardLight: getAvatarModule(BeardLight),
  BeardMajestic: getAvatarModule(BeardMajestic),
  BeardMedium: getAvatarModule(BeardMedium),
  MoustacheFancy: getAvatarModule(MoustacheFancy),
  MoustacheMagnum: getAvatarModule(MoustacheMagnum),
}
