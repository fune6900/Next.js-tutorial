import { ERROR_MESSAGES } from '@/app/constants';
import ActionWithClient from '@/components/ActionWithClient';
import ActionWithServer from '@/components/ActionWithServer';
import Box from '@/components/Box';
import React from 'react'

type PropsType = {
  searchParams: Promise<{
    errors: keyof typeof ERROR_MESSAGES | (keyof typeof ERROR_MESSAGES)[]; // ERROR_MESSAGESの
  }>;
};

const CallSeverActionPage = ({searchParams} : PropsType) => {
  return (
    <Box>
      <h1>Call Server Action Page</h1>
      <ActionWithServer searchParams={searchParams} />
    </Box>
  )
}

export default CallSeverActionPage ;