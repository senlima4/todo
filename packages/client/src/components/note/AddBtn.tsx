import { FiPlusCircle } from 'react-icons/fi'
import { IconButton } from '@chakra-ui/react'
import { useMutation } from 'react-relay/hooks'

import {
  CreateNoteUpdater,
  CreateNoteMutationNode,
} from '@/mutations/CreateNote'

type PropsType = {
  humanId: string
}

export default function AddNoteBtn({ humanId }: PropsType) {
  const [commit, isInFlight] = useMutation(CreateNoteMutationNode)

  const onAdd = () => {
    commit({
      variables: {
        input: {
          note: {
            humanId,
            content: 'init',
          },
        },
      },
      updater: store => {
        CreateNoteUpdater(store)
      },
    })
  }

  return (
    <IconButton
      isRound
      size="sm"
      variant="ghost"
      aria-label="add note"
      icon={<FiPlusCircle />}
      onClick={onAdd}
      isLoading={isInFlight}
    />
  )
}
