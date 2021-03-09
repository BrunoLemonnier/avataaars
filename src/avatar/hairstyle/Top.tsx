import { Colors as HairColors } from './hair/HairColor'
import { Colors as HeadgearColors } from './headgear/Color'

export interface TopProps {
  opacity?: number
  color?: keyof typeof HairColors | keyof typeof HeadgearColors
}
