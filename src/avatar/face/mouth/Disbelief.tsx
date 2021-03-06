import * as React from 'react'

export class Disbelief extends React.Component<{ opacity?: number }> {
  static optionValue = 'Disbelief'

  render() {
    return (
      <g
        id='Mouth/Disbelief'
        transform='translate(2.000000, 52.000000)'
        fillOpacity={0.699999988 * (this.props?.opacity || 1)}
        opacity={this.props?.opacity}
        fill='#000000'
        data-testid='Mouth/Disbelief'>
        <path
          d='M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15'
          id='Mouth'
          transform='translate(54.000000, 22.000000) scale(1, -1) translate(-54.000000, -22.000000) '
        />
      </g>
    )
  }
}

export const Component = Disbelief
