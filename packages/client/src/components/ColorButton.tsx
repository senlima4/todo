import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ColorButton({
  ...otherProps
}: Partial<IconButtonProps>) {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(<FiMoon />, <FiSun />)
  const label = useColorModeValue(
    'Switch to dark mode',
    'Switch to light mode'
  )

  return (
    <IconButton
      isRound
      size="sm"
      icon={icon}
      variant="ghost"
      aria-label={label}
      onClick={toggleColorMode}
      {...otherProps}
    />
  )
}
