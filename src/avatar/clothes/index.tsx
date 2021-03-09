import { getAvatarModule } from '../AvatarPart'
import * as NoClothes from './Blank'
import * as BlazerShirt from './BlazerShirt'
import * as BlazerSweater from './BlazerSweater'
import * as CollarSweater from './CollarSweater'
import * as GraphicShirt from './GraphicShirt'
import * as Hoodie from './Hoodie'
import * as Overall from './Overall'
import * as ShirtCrewNeck from './ShirtCrewNeck'
import * as ShirtScoopNeck from './ShirtScoopNeck'
import * as ShirtVNeck from './ShirtVNeck'

export const Components = {
  NoClothes: NoClothes.Component,
  BlazerShirt: BlazerShirt.Component,
  BlazerSweater: BlazerSweater.Component,
  CollarSweater: CollarSweater.Component,
  GraphicShirt: GraphicShirt.Component,
  Hoodie: Hoodie.Component,
  Overall: Overall.Component,
  ShirtCrewNeck: ShirtCrewNeck.Component,
  ShirtScoopNeck: ShirtScoopNeck.Component,
  ShirtVNeck: ShirtVNeck.Component,
}

export const AvatarModules = {
  NoClothes: getAvatarModule(NoClothes),
  BlazerShirt: getAvatarModule(BlazerShirt),
  BlazerSweater: getAvatarModule(BlazerSweater),
  CollarSweater: getAvatarModule(CollarSweater),
  GraphicShirt: getAvatarModule(GraphicShirt),
  Hoodie: getAvatarModule(Hoodie),
  Overall: getAvatarModule(Overall),
  ShirtCrewNeck: getAvatarModule(ShirtCrewNeck),
  ShirtScoopNeck: getAvatarModule(ShirtScoopNeck),
  ShirtVNeck: getAvatarModule(ShirtVNeck),
}
