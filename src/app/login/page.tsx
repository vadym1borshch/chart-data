'use client';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Box, Button } from '@mui/material';

interface LoginProps {
  // define your props here
}

const Login: React.FC<LoginProps> = ({}) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [])
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
       <h1>
         Not signed in
    </h1>
      <Button variant="contained" onClick={() => signIn()}>Sign in</Button>
    </Box>
  );
};

export default Login;
