import React from 'react'

type Props = {
  children: React.ReactNode;
};

const Box = ( {children}: Props) => {
  return (
    <div className='p-5 m-5 border-2 border-gray-200 rounded-md flex flex-col items-center justify-center gap-2'>
      {children}
    </div>
  )
}

export default Box;