"use client";
import { actionCalledClient } from '@/app/actions/action-called-client';
import { ERROR_MESSAGES } from '@/app/constants';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Box from './Box';

const ActionWithClient= () => {
  const router = useRouter();
  const [info, setinfo] = useState({
    name: '',
    email: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<(keyof typeof ERROR_MESSAGES)[]>([]);

  const onChangeInfo = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setinfo({...info, [name]: value});
  };

  const handsleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);
    const { name, email } = info;
    const newerrors: (keyof typeof ERROR_MESSAGES)[] = [];
    if (name === '') {
      newerrors.push('empty_name');
    }
    if (email === '') {
      newerrors.push('empty_email');
    }
    if (newerrors.length > 0) {
      setErrors(newerrors);
      setLoading(false);
      return;
    }
    const res = await actionCalledClient(name, email);
    setLoading(false);
    if (res.success) {
      router.push('/static-rendering');
    } else {
      setErrors(res.errors);
    }
  }
  return (
    <Box>
      <h2>Action With Client</h2>
      <form 
      className='flex flex-col items-center gap-2'
      onSubmit={handsleSubmit}
      >
        <label htmlFor="user-name">お名前：</label>
        <input type="text" id="user-name" name='name' className='border' value={info.name} onChange={onChangeInfo} />
        <label htmlFor="user-email">メールアドレス：</label>
        <input type='text' id="user-email" name='email' className='border' value={info.email} onChange={onChangeInfo} />
        {errors.map((error) => (
          <p key={error} className='text-red-500 text-sm'>
            {ERROR_MESSAGES[error]}
          </p>
        ))}
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>
          {loading ? 'Loading...' : 'Create'}
        </button>
      </form>
    </Box>
  )
}

export default ActionWithClient;
