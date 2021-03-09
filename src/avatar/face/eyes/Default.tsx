import * as React from 'react'

export class DefaultEye extends React.Component<{ opacity?: number }> {
  static optionValue = 'Default'

  render() {
    return (
      <g
        id='Eyes/Default-😀'
        transform='translate(0.000000, 8.000000)'
        fillOpacity={0.599999964 * (this.props?.opacity || 1)}
        opacity={this.props?.opacity}
        data-testid='Eyes/Default'>
        <circle id='Eye' cx='30' cy='22' r='6' />
        <circle id='Eye' cx='82' cy='22' r='6' />
      </g>
    )
  }
}

export const Component = DefaultEye
