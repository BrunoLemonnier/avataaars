import { uniqueId } from 'lodash'
import { HEADGEAR } from '../Category'
import { TopProps } from '../Top'

export const category = HEADGEAR

export const associatedTypes = ['facialHairType']

export const Bald: React.FC<TopProps> = ({ children }) => {
  const mask1 = uniqueId('react-mask-')
  const path1 = uniqueId('react-path-')
  const filter1 = uniqueId('react-filter-')

  return (
    <g id='Style' strokeWidth='1' fillRule='evenodd' data-testid='Style/Bald'>
      <defs>
        <rect id={path1} x='0' y='0' width='264' height='280' />
        <filter
          x='-0.8%'
          y='-2.0%'
          width='101.5%'
          height='108.0%'
          filterUnits='objectBoundingBox'
          id={filter1}>
          <feOffset
            dx='0'
            dy='2'
            in='SourceAlpha'
            result='shadowOffsetOuter1'
          />
          <feColorMatrix
            values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
            type='matrix'
            in='shadowOffsetOuter1'
            result='shadowMatrixOuter1'
          />
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1} />
      </mask>
      <g id='Mask' />
      <g id='Style/No-Hair' mask={`url(#${mask1})`}>
        <g transform='translate(-1.000000, 0.000000)'>{children}</g>
      </g>
    </g>
  )
}

export const Component = Bald
