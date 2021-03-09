import { render, screen } from '@testing-library/react'
import { Colors, isHeadGearColor } from './Color'

test("isHeadGearColor('PastelBlue') return true", async () => {
  expect(isHeadGearColor('PastelBlue')).toBeTruthy()
})

test('render a Color (PastelBlue)', async () => {
  render(
    <svg>
      <Colors.PastelBlue maskID={'nomask'} />
    </svg>
  )
  expect(
    screen.queryByTestId(`Color/HeadgearColor/${'PastelBlue'}`)
  ).toBeTruthy()
})
