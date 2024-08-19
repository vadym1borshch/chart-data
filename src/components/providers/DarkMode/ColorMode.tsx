"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactNode, useMemo, useState } from 'react';
import { ColorModeContext } from '@/contexts/ColorModeContext';


interface ColorModeProps {
  children: ReactNode;
}

const ColorMode = ({ children }: ColorModeProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorMode;