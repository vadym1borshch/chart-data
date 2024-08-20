'use client';
import React, { useEffect, useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '@/app/mock';


export default function Home() {
  const theme = useTheme();
  const [resizeTrigger, setResizeTrigger] = useState(0);
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    firstName: true,
    lastName: true,
  });
  useEffect(() => {
    const handleResize = () => {
      setResizeTrigger((prev) => prev + 1);
      setColumnVisibilityModel({
        firstName: window.innerWidth > 600,
        lastName: window.innerWidth > 600,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box sx={{ height: 400, overflowX: 'auto', display: 'flex' }}>
      <DataGrid
        sx={{
          backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
          color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          '--DataGrid-containerBackground': 'transparent',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor:
              theme.palette.mode === 'dark' ? '#FF5733' : '#33C8FF',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          },
        }}
        key={resizeTrigger}
        rows={rows}
        columns={columns}
        columnVisibilityModel={columnVisibilityModel}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
