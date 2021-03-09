import * as React from 'react'

export class Serious extends React.Component<{ opacity?: number }> {
  static optionValue = 'Serious'

  render() {
    return (
      <g
        id='Mouth/Serious'
        transform='translate(2.000000, 52.000000)'
        fill='#000000'
        fillOpacity={0.699999988 * (this.props?.opacity || 1)}
        opacity={this.props?.opacity}
        data-testid='Mouth/Serious'>
        <rect id='Why-so-serious?' x='42' y='18' width='24' height='6' rx='3' />
      </g>
    )
  }
}

export const Component = Serious
