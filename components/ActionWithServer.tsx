import { ERROR_MESSAGES } from '@/app/constants'
import React from 'react'
import Box from './Box';
import { actionCalledServer } from '@/app/actions/action-called-server';

type PropsType = {
  searchParams: Promise<{
    errors: keyof typeof ERROR_MESSAGES | (keyof typeof ERROR_MESSAGES)[]; // ERROR_MESSAGESの
  }>;
};

const ActionWithServer = async ({ searchParams} : PropsType) => {
  const {errors: queryErrors } = await searchParams;
  let errors: (keyof typeof ERROR_MESSAGES)[] = [];
  if (typeof queryErrors === 'string') {
    errors = [queryErrors];
  };
  if (Array.isArray(queryErrors)) {
    errors = queryErrors;
  }
  return (
    <Box>
      <h2>Action With Server</h2>
      <form 
      action={actionCalledServer}
      className='flex flex-col items-center gap-2'
      >
        <label htmlFor="user-name">お名前：</label>
        <input type="text" id="user-name" name='name'className='border' />
        <label htmlFor="user-email">メールアドレス：</label>
        <input type='text' id="user-email" name='email' className='border' />
        {errors.map((error) => (
          <p key={error} className='text-red-500 text-sm'>
            {ERROR_MESSAGES[error]}
          </p>
        ))}
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>
          Create
        </button>
      </form>
    </Box>
  )
}

export default ActionWithServer
