import React from 'react'
import { Textarea } from '@chakra-ui/react'

export default React.forwardRef<HTMLTextAreaElement>((props, ref) => (
  <Textarea
    ref={ref}
    h="full"
    resize="none"
    outline="none"
    border="none !important"
    boxShadow="none !important"
    placeholder="Note something..."
  />
))
