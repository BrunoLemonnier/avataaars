import { componentPackage } from './options'

describe('componentPackage("skinColor")', () => {
  let avatarModule = componentPackage('skinColor')
  it('contains "DarkBrown" Skin as AvatarModule', () => {
    expect(avatarModule['DarkBrown']).toBeDefined()
    expect(avatarModule['DarkBrown'].Component).toBeDefined()
  })
})

describe('componentPackage("hairStyleType")', () => {
  let avatarModule = componentPackage('hairStyleType')
  it('contains "LongHairBun" Hair as AvatarModule', () => {
    expect(avatarModule['LongHairBun']).toBeDefined()
    expect(avatarModule['LongHairBun'].Component).toBeDefined()
    expect(
      Array.isArray(avatarModule['LongHairBun'].associatedTypes)
    ).toBeTruthy()
  })
})
describe('componentPackage("accessoriesType")', () => {
  let avatarModule = componentPackage('accessoriesType')
  it('contains "Kurt" Accessory as AvatarModule', () => {
    expect(avatarModule['Kurt']).toBeDefined()
    expect(avatarModule['Kurt'].Component).toBeDefined()
  })
})
describe('componentPackage("headgearColor")', () => {
  let avatarModule = componentPackage('headgearColor')
  it('contains "PastelBlue" Color as AvatarModule', () => {
    expect(avatarModule['PastelBlue']).toBeDefined()
    expect(avatarModule['PastelBlue'].Component).toBeDefined()
  })
})
describe('componentPackage("hairColor")', () => {
  let avatarModule = componentPackage('hairColor')
  it('contains "BrownDark" Color as AvatarModule', () => {
    expect(avatarModule['BrownDark']).toBeDefined()
    expect(avatarModule['BrownDark'].Component).toBeDefined()
  })
})
describe('componentPackage("facialHairType")', () => {
  let avatarModule = componentPackage('facialHairType')
  it('contains "BeardMajestic" FacialHair as AvatarModule', () => {
    expect(avatarModule['BeardMajestic']).toBeDefined()
    expect(avatarModule['BeardMajestic'].Component).toBeDefined()
    expect(
      Array.isArray(avatarModule['BeardMajestic'].associatedTypes)
    ).toBeTruthy()
  })
})
describe('componentPackage("facialHairColor")', () => {
  let avatarModule = componentPackage('facialHairColor')
  it('contains "Platinum" Color as AvatarModule', () => {
    expect(avatarModule['Platinum']).toBeDefined()
    expect(avatarModule['Platinum'].Component).toBeDefined()
  })
})
describe('componentPackage("clotheType")', () => {
  let avatarModule = componentPackage('clotheType')
  it('contains "Blonde" Color as AvatarModule', () => {
    expect(avatarModule['Hoodie']).toBeDefined()
    expect(avatarModule['Hoodie'].Component).toBeDefined()
  })
})
describe('componentPackage("clotheColor")', () => {
  let avatarModule = componentPackage('clotheColor')
  it('contains "Blonde" Color as AvatarModule', () => {
    expect(avatarModule['PastelYellow']).toBeDefined()
    expect(avatarModule['PastelYellow'].Component).toBeDefined()
  })
})
describe('componentPackage("eyeType")', () => {
  let avatarModule = componentPackage('eyeType')
  it('contains "Dizzy" Eye as AvatarModule', () => {
    expect(avatarModule['Dizzy']).toBeDefined()
    expect(avatarModule['Dizzy'].Component).toBeDefined()
  })
})
describe('componentPackage("eyebrowType")', () => {
  let avatarModule = componentPackage('eyebrowType')
  it('contains "SadConcernedNatural" Eyebrow as AvatarModule', () => {
    expect(avatarModule['SadConcernedNatural']).toBeDefined()
    expect(avatarModule['SadConcernedNatural'].Component).toBeDefined()
  })
})
describe('componentPackage("mouthType")', () => {
  let avatarModule = componentPackage('mouthType')
  it('contains "Grimace" Mouth as AvatarModule', () => {
    expect(avatarModule['Grimace']).toBeDefined()
    expect(avatarModule['Grimace'].Component).toBeDefined()
  })
})
