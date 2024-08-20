import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

export const PaperContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem ',
  maxWidth: '60rem',
  [theme.breakpoints.down(615)]: {
    width: '100%',
  }
}))

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
}))

export const Span = styled("span")(({ theme }) => ({
  textAlign: 'center'
}))