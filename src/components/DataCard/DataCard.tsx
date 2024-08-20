'use client';
import React from 'react';
import { Box } from '@mui/material';
import Popover from '@/components/Popper/Popper';
import { Header, PaperContainer, Span } from '@/components/DataCard/styles';

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
      <Span>{value}</Span>
    </PaperContainer>
  );
};

export default DataCard;
