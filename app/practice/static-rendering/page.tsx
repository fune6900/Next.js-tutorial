import React from 'react'
import Box from '@/components/Box';
import StaticClientComponent from '@/components/StaticClientComponent';
import StaticServerComponent from '@/components/StaticServerComponent ';
import Link from 'next/link';
import Image from 'next/image';

const StaticRenderingPage = () => {
  return (
    <Box>
      <h1 className='text-2xlfont-bold'>Dynamic Rendering Page</h1>
      <StaticServerComponent text="Static SerVer ConponentへのProps"  />
      <StaticClientComponent text="Static Client ComponentへのProps" />
      <Image src="/150x150.png" width={150} height={150} alt="Sample Image" />
      <Link href="/practice/streaming-ssr">Streaming SSR Pageへ</Link>
    </Box>
  )
}

export default StaticRenderingPage;
