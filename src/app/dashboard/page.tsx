'use client';
import React, { Fragment } from 'react';
import DataCard from '@/components/DataCard/DataCard';
import {
  ChartWrapper,
  DashboardContainer,
  PieChartContainer,
  PieChartWrapper,
} from '@/app/dashboard/styles';
import { BarChart } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box, useTheme } from '@mui/material';
import { barChartData, cardData, pieChartData } from '@/app/dashboard/mock';

interface DashboardProps {
  // define your props here
}

const initialWidth = 100;

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const theme = useTheme();
  return (
    <DashboardContainer>
      <ChartWrapper>
        {cardData.map((el) => {
          return (
            <DataCard
              key={el.id}
              title={el.title}
              descriptions={el.description}
              value={el.value}
            />
          );
        })}
      </ChartWrapper>

      <Box sx={{ width: '100%' }}>
        <BarChart
          xAxis={[{ scaleType: 'band', data: barChartData.month }]}
          series={barChartData.data}
          width={undefined}
          height={300}
        />
      </Box>
      <PieChartContainer width={initialWidth}>
        {pieChartData.map((el) => {
          return (
            <PieChartWrapper
              width={initialWidth}
              dataLength={pieChartData.length}
              key={el.id}
            >
              <PieChart
                sx={{
                  width: '50%',
                  '& .MuiChartsLegend-root': {
                    display: 'none',
                  },
                  '& .MuiResponsiveChart-container': {
                    display: 'flex',
                    justifyContent: 'center',
                  },
                }}
                series={[
                  {
                    data: el.data,
                  },
                ]}
                width={undefined}
                height={200}
                margin={{ right: 5 }}
              />
              <Box>
                {el.data.map((item) => {
                  return (
                    <Fragment key={item.id}>
                      <Box>
                        {item.value}
                        {item.label}
                      </Box>
                    </Fragment>
                  );
                })}
              </Box>
            </PieChartWrapper>
          );
        })}
      </PieChartContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
