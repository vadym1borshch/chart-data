'use client';
import React, { FC, ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';
import { Descriptions } from '@/components/Popper/styles';

interface IPopoverProps {
  children: ReactNode;
}

const Popover: FC<IPopoverProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const hoverHandler = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <Box>
      <IconButton
        aria-describedby={id}
        type="button"
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        <InfoIcon />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Descriptions>{children}</Descriptions>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default Popover;
