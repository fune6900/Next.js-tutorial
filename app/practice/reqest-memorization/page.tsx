import Box from '@/components/Box';
import ClientDataFetch from '@/components/ClientDataFetch';
import DynamicServerDataFetch from '@/components/DynamicServerDataFetch';
import ReqestMemorization from '@/components/ReqestMemorization';
import React from 'react'

const ReqestMemoruzationPage = () => {
  return (
    <Box>
      <h1>Request Memorization Page</h1>
      <DynamicServerDataFetch />
      <ReqestMemorization />
    </Box>
  )
}

export default ReqestMemoruzationPage;

