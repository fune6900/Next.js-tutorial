import React from 'react'
import Box from '@/components/Box';
import DynamicServerComponent from '@/components/DynamicServerComponent';

const DynamicRenderingPage = () => {
  return (
    <Box>
      <h1 className='text-2xlfont-bold'>Dynamic Rendering Page</h1>
      <DynamicServerComponent text="Dynamic SerVer ConponentへのProps"  />
    </Box>
  )
}

export default DynamicRenderingPage;
