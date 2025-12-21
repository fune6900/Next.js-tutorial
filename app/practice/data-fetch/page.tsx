import Box from '@/components/Box'
import ClientDataFetch from '@/components/ClientDataFetch'
import DynamicServerDataFetch from '@/components/DynamicServerDataFetch'
// import StaticServerDataFetch from '@/components/StaticServerDataFetch'
import React from 'react'

const DataFetchpage = () => {
  return (
		<Box>
		  <h1>Data Fetch Page</h1>
      <DynamicServerDataFetch />
			<ClientDataFetch />
		</Box>
  )
}

export default DataFetchpage;

