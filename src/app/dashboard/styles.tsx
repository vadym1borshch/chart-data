import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { pieChartData } from '@/app/dashboard/mock';
import { PieChart } from '@mui/x-charts/PieChart';

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

export const PieChartContainer = styled(Box)<{ width: any }>(
  ({ theme, ...props }) => ({
    display: 'flex',
    alignItems: 'center',
    width: `${props.width}%`,
    [theme.breakpoints.down(615)]: {
      flexWrap: 'wrap',
    },
  })
);
export const PieChartWrapper = styled(Box)<{ width: number; dataLength: number }>(
  ({ theme, ...props }) => ({
    width: `${props.width / props.dataLength}%`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down(615)]: {
      width: '100%',
    },
  })
);



