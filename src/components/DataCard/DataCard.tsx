'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';
import Popover from '@/components/Popper/Popper';
import { Header, PaperContainer } from '@/components/DataCard/styles';

interface DataCardProps {
  title: string;
  descriptions: string;
  value: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, descriptions, value }) => {
  return (
    <PaperContainer>
      <Header>
        <Box>{title}</Box>
        <Popover>{descriptions}</Popover>
      </Header>
      <Box sx={{ textAlign: 'center' }}>{value}</Box>
    </PaperContainer>
  );
};

export default DataCard;
