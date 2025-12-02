"use client";
import React, { useState } from 'react'
import Box from './Box';

type Props = {
  text: string;
};

const StaticClientComponent = ({ text }: Props) => {
  const [count, setCount] = useState(0);
  const onHandClick = () => {
    setCount(count + 1);
  };

  return (
    <Box>
      <h2>Static Client Components</h2>
      <p>{text}</p>
      <p>Count: {count}</p>
      <button onClick={onHandClick} className='px-4 py-2 bg-blue-500 text-white rounded-md'>
        Count up!!
      </button>
    </Box>
  )
}

export default StaticClientComponent;
