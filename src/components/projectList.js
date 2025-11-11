import StyledPaper from './styledPaper.js';
import { Box, Typography } from '@mui/material';
import projects from '../data/projects.js';
import { SwiperContext } from "../views/home.js"; 
import { useContext } from "react";

export default function ProjectList() {
  const { mainSwiper, selectedSlide, setSelectedSlide } = useContext(SwiperContext);

  const handleClick = (idx) => {
    if (mainSwiper) mainSwiper.slideToLoop(idx);
    setSelectedSlide(idx);
  };

  return (
    <StyledPaper sx={{ mt: '1rem' }}>
      <StyledPaper sx={{ textAlign: 'justify' }}>
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', fontWeight: 'bold', m: 0 }}
        >
          Projects List
        </Typography>

        {projects.map((proj, idx) => (
          <Box
            key={idx}
            onClick={() => handleClick(idx)}
            sx={{
              cursor: 'pointer',
              m: '0.7rem 1rem',
              p: '0.3rem 0',
              boxShadow: '0px 0px 2px 0px darkblue',
              border: '1px solid',
              borderRadius: '4px',
              borderColor: (t) => t.palette.divider,
              backgroundColor: (t) =>
                selectedSlide === idx
                  ? t.palette.common.blue + '33'
                  : t.palette.grey[t.palette.mode === 'light' ? 200 : 800],
              transition: 'background-color 0.15s ease-in-out, transform 0.1s ease-in-out',
              ':hover': {
                transform: 'scale(1.015)'
              },
              ':active': {
                transform: 'scale(0.98)'
              }
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ ml: '1rem', mt: '0.2rem' }}
            >
              {idx + 1}. {proj.title}
            </Typography>
          </Box>
        ))}
      </StyledPaper>
    </StyledPaper>
  );
}
