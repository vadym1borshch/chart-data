'use client';
import React, { useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { useSession } from 'next-auth/react';
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
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{width:'50%', px: 1}}>
        <h2>Data-Chart</h2>
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
        px: 1
      }}>
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
        <span>Signed in as {session?.user?.name}</span>
      </Box>
    </Box>
  );
};

export default Header;
