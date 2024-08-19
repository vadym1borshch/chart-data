import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Descriptions = styled(Box)(({ theme }) => ({
  border: "solid 1px",
  padding: ".5rem",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "5px",
}));
