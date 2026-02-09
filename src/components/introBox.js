import StyledPaper from './styledPaper.js';
import { Typography } from '@mui/material';


export default function IntroBox(){
  return (
    <StyledPaper>
      <StyledPaper sx={{ textAlign: 'justify' }}>
        <Typography
          variant="h6"
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            margin: '0'
            }}
        >
        </Typography>
      </StyledPaper>
    </StyledPaper>
  );
}

