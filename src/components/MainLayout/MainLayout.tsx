'use client';
import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import SideBar from '@/components/SIdeBar/SideBar';
import { useSession } from 'next-auth/react';
import Login from '@/app/login/page';
import Header from '@/components/Header/Header';

interface MainLayout {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayout> = ({ children }) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          bgcolor: 'background.default',
          color: 'text.primary',
          height: '100vh',
          zIndex: 0,
        }}
      >
        <Box
          display="grid"
          gridTemplateColumns="1fr"
          gridTemplateRows="80px 1fr"
          height="100vh"
          width="100%"
          zIndex={2}
        >
          <Header />
          <Box sx={{ display: 'flex' }}>
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%' }}>
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  return <Login />;
};

export default MainLayout;
