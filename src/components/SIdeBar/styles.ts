import { CSSObject, styled, Theme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Link from 'next/link';
import { Box, IconButton } from '@mui/material';

const drawerWidth = 240;

export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8)} + 1px)`,
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'absolute',
  bottom: 0,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const StyledLink = styled(Link)<{ open: boolean }>(({ theme, ...props }) => {
  return {
    textDecoration: 'none',
    alignItems: 'center',
    color: 'inherit',
    display: 'flex',
    minHeight: 48,
    width: '100%',
    '& .MuiListItemIcon-root': {
      marginLeft: 20,
    },
    zIndex: 12
  };
});

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  '& .MuiDrawer-paper': {
    position: 'relative',
  },
}))

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  display: 'none',
  [theme.breakpoints.up(500)]: {
    display: 'block',
  },
}))