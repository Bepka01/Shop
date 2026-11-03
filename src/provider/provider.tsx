'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Provider: FC<Props> = ({ children }) => {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
}
