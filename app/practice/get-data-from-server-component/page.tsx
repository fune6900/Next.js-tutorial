import ActionWithClient from '@/components/ActionWithClient';
import Box from '@/components/Box';
import GetDataFromServerComponent from '@/components/GetDataFromServerComponent';
import React from 'react'

const GetDataFromServerComponentPage = () => {
  return (
    <Box>
      <h1>Get Data From Server Component Page</h1>
      <GetDataFromServerComponent />
      <ActionWithClient />
    </Box>
  )
}

export default GetDataFromServerComponentPage;
