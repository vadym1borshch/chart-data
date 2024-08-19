'use client';
import React, { useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ColorModeContext } from '@/contexts/ColorModeContext';

interface HeaderProps {
  // define your props here
}

const Header: React.FC<HeaderProps> = ({}) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { data: session } = useSession();
  return (
    <Box
      sx={{
        zIndex: 9999,
        height: '80px',
        borderBottom: '1px solid ',
      }}
    >
      Signed in as {session?.user?.name}

      <button onClick={() => signOut()}>Sign out</button>
      HEADER
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};

export default Header;
