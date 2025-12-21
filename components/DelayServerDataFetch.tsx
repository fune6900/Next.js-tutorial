import React from 'react';
import Box from './Box';

type Todo = {
  id: number;
  todo: string;
};

const DelayServerDataFetch = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch('https://dummyjson.com/todos/random', {
    cache: 'no-store',
  });
  const todo: Todo = await res.json();

  return (
    <Box>
      <h2>Delay Server Data Fetching</h2>
      <p>ID: {todo.id}</p>
      <p>Todo: {todo.todo}</p>
    </Box>
  )
}

export default DelayServerDataFetch;
