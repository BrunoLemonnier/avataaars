import { render, screen } from '@testing-library/react'
import Avatar from './Avatar'
import { AvatarStyle } from './AvatarStyle'
import '../options'

it('renders without crashing', async () => {
  render(<Avatar avatarStyle={AvatarStyle.Circle} />)
})

const someProps: Record<string, string> = {
  skinColor: 'Yellow',
  //
  accessoriesType: 'Wayfarers',
  topType: 'LongHairCurvy',
  hairColor: 'BrownDark',
  //hatColor: 'PastelOrange',
  facialHairType: 'BeardMajestic',
  facialHairColor: 'BlondeGolden',
  //
  clotheType: 'ShirtVNeck',
  clotheColor: 'Blue01',
  // graphicType:'Bat',
  //
  eyeType: 'Dizzy',
  eyebrowType: 'SadConcernedNatural',
  mouthType: 'Grimace',
}

it('renders Avatar with defined props (with hairs)', async () => {
  render(<Avatar avatarStyle={AvatarStyle.Circle} {...someProps} />)
  screen.queryByTestId(`Accessories/${someProps.accessoriesType}`)
  testHair(someProps.topType, someProps.hairColor)
  testFacialHair(someProps.facialHairType, someProps.facialHairColor)
  screen.queryByTestId(`Clothing/${someProps.clotheType}`)
  expect(
    screen.queryByTestId(`Color/Clothe/${someProps.clotheColor}`)
  ).toBeTruthy()
  testFace(someProps.eyeType, someProps.mouthType, someProps.eyebrowType)
})

it('renders Avatar with defined props (with hat)', async () => {
  const { hairColor, topType, ...otherProps } = someProps
  const props: Record<string, string> = {
    ...otherProps,
    topType: 'WinterHat2',
    hatColor: 'PastelBlue',
  }
  render(<Avatar avatarStyle={AvatarStyle.Circle} {...props} />)
  expect(
    screen.queryByTestId(`Accessories/${props.accessoriesType}`)
  ).toBeTruthy()
  testHat(props.topType, props.hatColor)
  testFacialHair(props.facialHairType, props.facialHairColor)
  expect(screen.queryByTestId(`Clothing/${props.clotheType}`)).toBeTruthy()
  expect(screen.queryByTestId(`Color/Clothe/${props.clotheColor}`)).toBeTruthy()
  testFace(props.eyeType, props.mouthType, props.eyebrowType)
})

it('renders Avatar with defined props (with graphic Clothe)', async () => {
  const props: Record<string, string> = {
    ...someProps,
    clotheType: 'GraphicShirt',
    clotheColor: 'Blue02',
    graphicType: 'Bat',
  }
  render(<Avatar avatarStyle={AvatarStyle.Circle} {...props} />)
  expect(screen.queryByTestId(`Clothing/${props.clotheType}`)).toBeTruthy()
  expect(screen.queryByTestId(`Color/Clothe/${props.clotheColor}`)).toBeTruthy()
  expect(
    screen.queryByTestId(`Clothing/Graphic/${props.graphicType}`)
  ).toBeTruthy()
})

// utils

function testFace(eyeType: string, mouthType: string, eyebrowType: string) {
  expect(screen.queryByTestId(`Eyes/${eyeType}`)).toBeTruthy()
  expect(screen.queryByTestId(`Mouth/${mouthType}`)).toBeTruthy()
  expect(screen.queryByTestId(`Eyebrow/${eyebrowType}`)).toBeTruthy()
}

function testFacialHair(facialHairType: string, facialHairColor: string) {
  expect(screen.queryByTestId(`FacialHair/${facialHairType}`)).toBeTruthy()
  expect(
    screen.queryByTestId(`Color/FacialHair/${facialHairColor}`)
  ).toBeTruthy()
}

function testHair(hairType: string, hairColor: string) {
  expect(screen.queryByTestId(`Top/${hairType}`)).toBeTruthy()
  expect(screen.queryByTestId(`Color/Hair/${hairColor}`)).toBeTruthy()
}

function testHat(topType: string, hatColor: string) {
  expect(screen.queryByTestId(`Top/${topType}`)).toBeTruthy()
  expect(screen.queryByTestId(`Color/HatColor/${hatColor}`)).toBeTruthy()
}
