import * as Eyebrow from './eyebrow'
import * as Eyes from './eyes'
import * as Mouth from './mouth'
import * as Nose from './nose'

export const AvatarModules = {
  ...Eyebrow.AvatarModules,
  ...Eyes.AvatarModules,
  ...Mouth.AvatarModules,
  ...Nose.AvatarModules,
}

export const Components = {
  ...Eyebrow.Components,
  ...Eyes.Components,
  ...Mouth.Components,
  ...Nose.Components,
}

export const Face: React.FC = ({ children }) => {
  return (
    <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
      {children}
    </g>
  )
}

export default Face
