import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'

const ColorButton = ({
  ...otherProps
}: Partial<IconButtonProps>): JSX.Element => {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(<FiMoon />, <FiSun />)
  const label = useColorModeValue(
    'Switch to dark mode',
    'Switch to light mode'
  )

  return (
    <IconButton
      size="sm"
      icon={icon}
      aria-label={label}
      onClick={toggleColorMode}
      {...otherProps}
    />
  )
}

export default ColorButton
