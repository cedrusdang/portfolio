import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 16px 40px rgba(0,0,0,0.35)'
      : '0 14px 36px rgba(17,24,39,0.10)',
}));

export default StyledPaper;
