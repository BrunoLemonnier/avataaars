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
  hairStyleType: 'LongHairCurvy',
  hairColor: 'BrownDark',
  //headgearColor: 'PastelOrange',
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
  testHair(someProps.hairStyleType, someProps.hairColor)
  testFacialHair(someProps.facialHairType, someProps.facialHairColor)
  screen.queryByTestId(`Clothing/${someProps.clotheType}`)
  expect(
    screen.queryByTestId(`Color/Clothe/${someProps.clotheColor}`)
  ).toBeTruthy()
  testFace(someProps.eyeType, someProps.mouthType, someProps.eyebrowType)
})

it('renders Avatar with defined props (with hat)', async () => {
  const { hairStyleType, ...otherProps } = someProps
  const props: Record<string, string> = {
    ...otherProps,
    hairStyleType: 'WinterHat2',
    headgearColor: 'PastelBlue',
  }
  render(<Avatar avatarStyle={AvatarStyle.Circle} {...props} />)
  expect(
    screen.queryByTestId(`Accessories/${props.accessoriesType}`)
  ).toBeTruthy()
  testHat(props.hairStyleType, props.headgearColor)
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
  expect(screen.queryByTestId(`Style/${hairType}`)).toBeTruthy()
  expect(screen.queryByTestId(`Color/Hair/${hairColor}`)).toBeTruthy()
}

function testHat(hairStyleType: string, headgearColor: string) {
  expect(screen.queryByTestId(`Style/${hairStyleType}`)).toBeTruthy()
  expect(
    screen.queryByTestId(`Color/HeadgearColor/${headgearColor}`)
  ).toBeTruthy()
}
