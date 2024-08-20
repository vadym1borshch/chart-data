'use client';
import * as React from 'react';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { v4 } from 'uuid';
import SettingsIcon from '@mui/icons-material/Settings';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { FC, ReactNode, useCallback } from 'react';
import {
  Container,
  Drawer,
  DrawerHeader,
  IconButtonStyled,
  StyledLink,
} from '@/components/SIdeBar/styles';
import { Tooltip, useTheme } from '@mui/material';
import { signOut } from 'next-auth/react';

const sideBarMenu = [
  { id: v4(), title: 'dashboard', icon: <EqualizerIcon /> },
  { id: v4(), title: 'users', icon: <PersonIcon /> },
  { id: v4(), title: 'settings', icon: <SettingsIcon /> },
  { id: v4(), title: 'logout', icon: <LogoutIcon /> },
];

const SideBar: FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const icon = useCallback(
    (icon: ReactNode, title: string) => {
      if (open) {
        return <ListItemIcon>{icon}</ListItemIcon>;
      }
      return (
        <Tooltip title={title}>
          <ListItemIcon>{icon}</ListItemIcon>
        </Tooltip>
      );
    },
    [open]
  );

  return (
    <Container>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButtonStyled onClick={handleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButtonStyled>
        </DrawerHeader>
        <List>
          {sideBarMenu.map((el) => (
            <ListItem key={el.id} disablePadding>
              <StyledLink
                href={el.title === 'users' ? '/' : `/${el.title}`}
                open={open}
                onClick={() => {
                  if (el.title === 'logout') {
                    signOut();
                  }
                  return;
                }}
              >
                {icon(el.icon, el.title)}
                <ListItemText
                  primary={el.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
};

export default SideBar;
