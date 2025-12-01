import { cookies } from 'next/headers';
import React from 'react'
import Box from './Box';

type Props = {
  text: string;
};

const DynamicServerComponent = async ({ text }: Props) => {
  const cookieStore = await cookies();
  const userName = cookieStore.get('username')?.value ?? '名無し';
  return (
    <Box>
      <h2>Dynamic Server Components</h2>
      <p>{text}</p>
      <p>username: {userName}</p>
    </Box>
  )
}

export default DynamicServerComponent;