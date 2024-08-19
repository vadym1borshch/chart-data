'use client'
import React, { ReactNode } from 'react';
import ColorMode from '@/components/providers/DarkMode/ColorMode';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

interface EntireWrapper {
  children: ReactNode;
  session?: Session | null
}

const EntireWrapper: React.FC<EntireWrapper> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <ColorMode>{children}</ColorMode>
    </SessionProvider>
  );
};

export default EntireWrapper;
