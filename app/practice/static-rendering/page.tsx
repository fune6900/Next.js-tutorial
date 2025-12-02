import React from 'react'
import Box from '@/components/Box';
import StaticClientComponent from '@/components/StaticClientComponent';
import StaticServerComponent from '@/components/StaticServerComponent ';

const StaticRenderingPage = () => {
  return (
    <Box>
      <h1 className='text-2xlfont-bold'>Dynamic Rendering Page</h1>
      <StaticServerComponent text="Static SerVer ConponentへのProps"  />
      <StaticClientComponent text="Static Client ComponentへのProps" />
    </Box>
  )
}

export default StaticRenderingPage;
