import * as React from 'react'

export * from './eyebrow'
export * from './eyes'
export * from './mouth'
export * from './nose'

export const Face: React.FC = ({ children }) => {
  return (
    <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
      {children}
    </g>
  )
}

export default Face
