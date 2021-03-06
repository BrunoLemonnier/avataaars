import * as React from 'react'

export class DefaultMouth extends React.Component<{ opacity?: number }> {
  static optionValue = 'Default'

  render() {
    return (
      <g
        id='Mouth/Default'
        transform='translate(2.000000, 52.000000)'
        fillOpacity={0.699999988 * (this.props?.opacity || 1)}
        opacity={this.props?.opacity}
        data-testid='Mouth/Default'>
        <path
          d='M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15'
          id='Mouth'
        />
      </g>
    )
  }
}

export const Component = DefaultMouth
