"use client";
import React, { use, useState } from 'react'
import Box from './Box';


type PropsType = {
  children: React.ReactNode;
}

const ClientBoundary = ({ children }: PropsType) => {
  const[isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => { // 表示・非表示を切り替える関数
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };
  return (
    <Box>
      <h1>Client Boundary</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? '非表示にする' : '表示する'}
      </button>
      {isVisible && children};
    </Box>
  )
}

export default ClientBoundary
