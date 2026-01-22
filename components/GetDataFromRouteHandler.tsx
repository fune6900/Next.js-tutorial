'use client';
import { User } from '@prisma/client';
import React, { useEffect, useState } from 'react'
import Box from './Box';

const GetDataFromRouteHandler = () => {
	const [users, setusers] = useState<User[]>([]);

	useEffect(() => {
		fetch('/api/sample')
			.then((res) => res.json())
			.then((data) => setusers(data));
	}, []);
  return (
    <Box>
      <h2>Get Data Route Handler</h2>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
    </Box>
  )
}

export default GetDataFromRouteHandler;
