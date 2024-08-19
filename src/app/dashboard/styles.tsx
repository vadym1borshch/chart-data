import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const DashboardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  margin: '0 auto',
  width: '100%',
}));

export const ChartWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  textAlign: 'center',
  gap: '1rem',
  width: '100%',
  margin: '0 auto',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 2fr))',
  [theme.breakpoints.down(615)]: {
    display: 'flex',
    flexDirection: 'column',
  },

}));
