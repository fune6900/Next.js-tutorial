import React from 'react'
import Box from './Box';

type Props = {
  text: string;
};

const StaticServerComponent = ({ text }: Props) => {
  return (
    <Box>
      <h2>Static Server Components</h2>
      <p>{text}</p>
    </Box>
  )
}

export default StaticServerComponent;
