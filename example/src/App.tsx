import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Avatar, {
  getComponentsPackageByType,
  componentPackage,
  AvatarStyle,
  AvatarProps,
  OptionType,
  rootTypes,
} from '@blemon/avataaars'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
    avatar: {
      maxWidth: '800px',
    },
    controlRoot: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    group: {
      display: 'flex',
      flexDirection: 'column',
    },
    empty: {},
  })
)

const defaultProps: AvatarProps = {
  skinColor: 'Light',
  //
  accessoriesType: 'NoAccessories',
  hairStyleType: 'LongHairStraight',
  hairColor: 'BrownDark',
  headgearColor: 'PastelOrange',
  facialHairType: 'NoFacialHair',
  facialHairColor: 'BrownDark',
  //
  clotheType: 'BlazerShirt',
  clotheColor: 'Blue01',
  graphicType: 'Bat',
  //
  eyeType: 'DefaultEye',
  eyebrowType: 'DefaultEyebrows',
  mouthType: 'DefaultMouth',
}

const App = () => {
  const classes = useStyles()
  const selectedOptionsStates = useSelectedOptionsStates(defaultProps)
  const selectedOptions = Object.entries(selectedOptionsStates).reduce(
    (selectedOptions, [key, tuple]) => {
      selectedOptions[key] = tuple[0]
      return selectedOptions
    },
    {} as AvatarProps
  )
  return (
    <>
      <div className={classes.root}>
        <Avatar
          className={classes.avatar}
          avatarStyle={AvatarStyle.Circle}
          {...selectedOptions}
        />
        <Form {...selectedOptionsStates} />
      </div>
    </>
  )
}

type FormProps = ReturnType<typeof useSelectedOptionsStates>
const Form: React.ComponentType<FormProps> = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.controlRoot}>
      {rootTypes.map((optionType) => {
        return (
          <SelectControl
            key={optionType}
            props={props}
            selected={props[optionType]}
            optionType={optionType}
          />
        )
      })}
    </div>
  )
}

export default App

interface SelectControlProps {
  className?: string
  selected: FormProps[keyof FormProps]
  optionType: OptionType
  props: ReturnType<typeof useSelectedOptionsStates>
}
const SelectControl: React.ComponentType<SelectControlProps> = ({
  className,
  selected,
  optionType,
  props,
}) => {
  const [selectedOption, setSelectedOption] = selected
  const classes = useStyles()
  const compModules = getComponentsPackageByType(optionType)
  const selectedAssociatedTypes: OptionType[] = selectedOption
    ? componentPackage(optionType)[selectedOption]?.associatedTypes || []
    : []
  const options = compModules.map((module) => module.name)
  return (
    <div className={className || classes.group}>
      <FormControl key={optionType} className={classes.formControl}>
        <InputLabel id={`${optionType}-select-label`}>{optionType}</InputLabel>
        <Select
          labelId={`${optionType}-select-label`}
          id={`${optionType}-select`}
          value={selectedOption || options[0]}
          onChange={(event) => {
            if (typeof event.target.value === 'string') {
              setSelectedOption(event.target.value as any)
            }
          }}>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedAssociatedTypes.map((optionType) => (
        <SelectControl
          key={optionType}
          props={props}
          selected={props[optionType]}
          optionType={optionType}
        />
      ))}
    </div>
  )
}

const useSelectedOptionsStates = (defaultProps: AvatarProps) => ({
  skinColor: React.useState(defaultProps['skinColor']),
  //
  hairStyleType: React.useState(defaultProps['hairStyleType']),
  accessoriesType: React.useState(defaultProps['accessoriesType']),
  hairColor: React.useState(defaultProps['hairColor']),
  headgearColor: React.useState(defaultProps['headgearColor']),
  facialHairType: React.useState(defaultProps['facialHairType']),
  facialHairColor: React.useState(defaultProps['facialHairColor']),
  //
  clotheType: React.useState(defaultProps['clotheType']),
  clotheColor: React.useState(defaultProps['clotheColor']),
  graphicType: React.useState(defaultProps['graphicType']),
  //
  eyeType: React.useState(defaultProps['eyeType']),
  eyebrowType: React.useState(defaultProps['eyebrowType']),
  mouthType: React.useState(defaultProps['mouthType']),
})
