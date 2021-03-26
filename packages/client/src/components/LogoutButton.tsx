import {
  useDisclosure,
  Text,
  Button,
  IconButton,
  IconButtonProps,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'
import { useNavigation } from 'react-navi'
import { FiLogOut } from 'react-icons/fi'

export default function LogoutButton({
  ...otherProps
}: Partial<IconButtonProps>) {
  const navigation = useNavigation()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = () => {
    window.localStorage.removeItem('todo-access')
    navigation.navigate('/login')
  }

  return (
    <>
      <IconButton
        isRound
        size="sm"
        icon={<FiLogOut />}
        variant="ghost"
        aria-label="logout"
        onClick={onOpen}
        {...otherProps}
      />
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalBody>
            <Text>Click Continue to logout.</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button color="red" variant="ghost" onClick={handleClick}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
