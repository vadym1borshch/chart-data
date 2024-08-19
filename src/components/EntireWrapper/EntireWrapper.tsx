import React, { ReactNode } from 'react';
import ColorMode from '@/components/providers/DarkMode/ColorMode';

interface EntireWrapper {
  children: ReactNode;
}

const EntireWrapper: React.FC<EntireWrapper> = ({ children }) => {
  return <ColorMode>{children}</ColorMode>;
};

export default EntireWrapper;
