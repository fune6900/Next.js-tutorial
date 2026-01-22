'use client';
import React, { ChangeEvent, useState } from 'react'
import Box from './Box';

const CreateDataWithRouteHandler = () => {
  const [info, setinfo] = useState({
    name: "",
    email: "",
  });
  const [message, setmessage] = useState<string | null>("");

  const onChangeINfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setinfo({ ...info, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('/api/sample', {
      method: 'POST',
      body: JSON.stringify(info)
    })
    .then((res) => res.json())
    .then((data) => setmessage(data.message))
  };
  return (
    <Box>
      <h2>Create Data With Route Handler</h2>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 items-center'
      />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={info.name}
          onChange={onChangeINfo}
          className='border border-gray-300 rounded px-2 py-1 w-64'
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={info.email}
          onChange={onChangeINfo}
          className='border border-gray-300 rounded px-2 py-1 w-64'
        />
        <button
          type="submit"
          className='bg-blue-500 text-white rounded px-4 py-2 mt-2'
        >
          Submit
        </button>
      {message !== null && <p className='mt-4 text-green-600'>{message}</p>}
    </Box>
  )
}

export default CreateDataWithRouteHandler
