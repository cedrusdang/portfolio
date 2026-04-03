import './portfolioBoxes.css';
import Box from '@mui/material/Box';
import ReviewCard from './projectCard.js';
import useActiveProfile from '../hooks/useActiveProfile.js';
import { getProjectAnchorId } from '../data/projectAnchors.js';

export default function PortfolioBoxes() {
  const { projects } = useActiveProfile();
  return (
    <Box sx={{ 
      width: '100%', 
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    }}>
        {projects.map((proj, idx) => (
          <Box key={idx} sx={{ 
            width: '100%',
            maxWidth: '600px',
            aspectRatio: '1 / 1',
            display: 'flex',
            scrollMarginTop: { xs: '84px', md: '96px' },
          }}>
            <Box
              id={getProjectAnchorId(proj.title)}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 'var(--shadow-2)',
                },
              }}
            >
              <ReviewCard
                title={proj.title}
                subheader={proj.subheader}
                image={proj.image}
                description={proj.description}
                techStack={proj.techStack}
                expandDescription={proj.expandDescription}
                githubURL={proj.githubURL}
                liveURL={proj.liveURL}
                loading='lazy'
              />
            </Box>
          </Box>
        ))}
    </Box>
  );
}
