import React from 'react';
import Box from './Box';

type Todo = {
  id: number;
  todo: string;
};

const StaticServerDataFetch = async () => {
  const res = await fetch('https://dummyjson.com/todos');
  const todo: Todo = await res.json();
  console.log(todo);

  if (todo === null) return <Box>Loading...</Box>;

  return (
    <Box>
      <h2>Client Data Fetching</h2>
      <p>ID: {todo.id}</p>
      <p>Todo: {todo.todo}</p>
    </Box>
  )
}

export default StaticServerDataFetch;
