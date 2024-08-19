'use client';
import React, { Fragment } from 'react';
import DataCard from '@/components/DataCard/DataCard';
import { ChartWrapper, DashboardContainer } from '@/app/dashboard/styles';
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
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: `${initialWidth}%`,
            [theme.breakpoints.down(615)]: {
              flexWrap: 'wrap',
            },
          }}
        >
          {pieChartData.map((el) => {
            return (
              <Box
                key={el.id}
                sx={{
                  width: `${initialWidth / pieChartData.length}%`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  [theme.breakpoints.down(615)]: {
                    width: '100%',
                  },
                }}
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
              </Box>
            );
          })}
        </Box>
      </Box>
    </DashboardContainer>
  );
};

export default Dashboard;
