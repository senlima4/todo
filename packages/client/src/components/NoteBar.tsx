import React from 'react'
import { Box, Flex, Spacer, Button } from '@chakra-ui/react'

import DeleteNoteButton from './DeleteNoteButton'

type PropTypes = {
  nodeId: string
  isSaving: boolean
  saveFunc: () => void
}

function NoteBar({ nodeId, saveFunc, isSaving }: PropTypes) {
  return (
    <Flex w="full" h={16} px={6} flex="none" align="center">
      <Box />
      <Spacer />
      <DeleteNoteButton nodeId={nodeId} />
      <Button ml={2} size="sm" onClick={saveFunc} isLoading={isSaving}>
        Save
      </Button>
    </Flex>
  )
}

export default React.memo<PropTypes>(NoteBar)
