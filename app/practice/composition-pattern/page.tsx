import Box from '@/components/Box'
import ClientBoundary from '@/components/ClientBoundary'
import StaticServerDataFetch from '@/components/StaticServerDataFetch'
import React from 'react'

const page = () => {
  return (
    <Box>
      <h1>Compisition Pattern Page</h1>
      <ClientBoundary>
        <StaticServerDataFetch />
      </ClientBoundary>
    </Box>
  )
}

export default page
