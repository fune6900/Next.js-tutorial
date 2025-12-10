"use client";
import React, { use, useEffect, useState } from 'react'
import Box from './Box';

type Todo = {
  id: number;
  todo: string;
};

const ClientDataFetch = () => {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(setTodo);
  }, []);

  if (todo === null) return <Box>Loading...</Box>;

  return (
    <Box>
      <h2>Client Data Fetching</h2>
      <p>ID: {todo.id}</p>
      <p>Todo: {todo.todo}</p>
    </Box>
  )
}

export default ClientDataFetch;

