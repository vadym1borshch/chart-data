'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { v4 } from 'uuid';
import SettingsIcon from '@mui/icons-material/Settings';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PersonIcon from '@mui/icons-material/Person';
import { FC } from 'react';
import { Drawer, DrawerHeader, StyledLink } from '@/components/SIdeBar/styles';

const sideBarMenu = [
  { id: v4(), title: 'dashboard', icon: <EqualizerIcon /> },
  { id: v4(), title: 'users', icon: <PersonIcon /> },
  { id: v4(), title: 'settings', icon: <SettingsIcon /> },
];

const SideBar: FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        '& .MuiDrawer-paper': {
          position: 'relative',
        },
      }}
    >
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{
          position: 'absolute',
          bottom: 0
        }}>
          <IconButton onClick={handleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {sideBarMenu.map((el, i) => (
            <ListItem key={el.id} disablePadding>
              <StyledLink
                href={el.title === 'users' ? '/' : `/${el.title}`}
                open={open}
              >
                <ListItemIcon>{el.icon}</ListItemIcon>
                <ListItemText
                  primary={el.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
