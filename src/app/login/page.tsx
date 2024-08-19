'use client';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Login;
