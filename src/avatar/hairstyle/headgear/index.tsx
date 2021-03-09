import { getAvatarModule } from '../../AvatarPart'
import * as Bald from './Bald'
import * as Eyepatch from './Eyepatch'
import * as Hat from './Hat'
import * as Hijab from './Hijab'
import * as Turban from './Turban'
import * as WinterHat1 from './WinterHat1'
import * as WinterHat2 from './WinterHat2'
import * as WinterHat3 from './WinterHat3'
import * as WinterHat4 from './WinterHat4'

export const Components = {
  Bald: Bald.Component,
  Eyepatch: Eyepatch.Component,
  Hat: Hat.Component,
  Hijab: Hijab.Component,
  Turban: Turban.Component,
  WinterHat1: WinterHat1.Component,
  WinterHat2: WinterHat2.Component,
  WinterHat3: WinterHat3.Component,
  WinterHat4: WinterHat4.Component,
}

export const AvatarModules = {
  Bald: getAvatarModule(Bald),
  Eyepatch: getAvatarModule(Eyepatch),
  Hat: getAvatarModule(Hat),
  Hijab: getAvatarModule(Hijab),
  Turban: getAvatarModule(Turban),
  WinterHat1: getAvatarModule(WinterHat1),
  WinterHat2: getAvatarModule(WinterHat2),
  WinterHat3: getAvatarModule(WinterHat3),
  WinterHat4: getAvatarModule(WinterHat4),
}
