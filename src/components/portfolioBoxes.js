import './portfolioBoxes.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReviewCard from './projectCard.js';
import useActiveProfile from '../hooks/useActiveProfile.js';
import { getProjectAnchorId } from '../data/projectAnchors.js';

const additionalTechnicalWorkTitles = new Set([
  'Image Classification with CNNs and MobileNetV3Small',
  'Explainable Natural Language Query Interface for Relational Databases (Multi-Agent System)',
  'NovelForger - AI Agent Novelist',
  'Smart Livestock Tracking System - IoT',
  'Little Lemon Restaurant - UX Design Principles and React Front-End Application',
]);

const moveToEndBeforeAdditionalTitle =
  'Classification and Clustering of Low Birth Weight Mortality';

export default function PortfolioBoxes() {
  const [showAdditionalWork, setShowAdditionalWork] = useState(false);
  const { pathname } = useLocation();
  const { projects } = useActiveProfile();

  const isDataSciencePath = pathname.toLowerCase().startsWith('/datascience');
  const rawPrimaryProjects = isDataSciencePath
    ? projects
    : projects.filter((project) => !additionalTechnicalWorkTitles.has(project.title));

  const primaryProjects = isDataSciencePath
    ? rawPrimaryProjects
    : [
        ...rawPrimaryProjects.filter(
          (project) => project.title !== moveToEndBeforeAdditionalTitle
        ),
        ...rawPrimaryProjects.filter(
          (project) => project.title === moveToEndBeforeAdditionalTitle
        ),
      ];

  const additionalProjects = isDataSciencePath
    ? []
    : projects.filter((project) => additionalTechnicalWorkTitles.has(project.title));

  const renderProjectCard = (proj, idx) => (
    <Box key={`${proj.title}-${idx}`} sx={{
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
  );

  return (
    <Box sx={{ 
      width: '100%', 
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    }}>
        {primaryProjects.map((proj, idx) => renderProjectCard(proj, idx))}

        {!isDataSciencePath && additionalProjects.length > 0 && (
          <Box
            sx={{
              width: '100%',
              maxWidth: '600px',
              border: '1px solid var(--border-subtle)',
              borderRadius: 1,
              px: 1,
              py: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(120, 130, 145, 0.2)'
                  : 'rgba(115, 123, 138, 0.16)',
            }}
          >
            <Button
              fullWidth
              variant="text"
              onClick={() => setShowAdditionalWork((prev) => !prev)}
              endIcon={showAdditionalWork ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              sx={{
                justifyContent: 'space-between',
                borderRadius: 1,
                border: '1px dashed var(--border-subtle)',
                color: 'text.secondary',
                fontWeight: 500,
                textTransform: 'none',
                letterSpacing: '0.01em',
                py: 1,
                '&:hover': {
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'rgba(231, 237, 245, 0.04)'
                      : 'rgba(27, 36, 48, 0.04)',
                },
              }}
            >
              Additional Technical Work
            </Button>

            <Typography
              variant="caption"
              sx={{
                mt: 0.5,
                mb: 0.5,
                display: 'block',
                textAlign: 'left',
                color: 'text.secondary',
                opacity: 0.8,
              }}
            >
              Less central to DA positioning. Expand if you are curious.
            </Typography>

            <Collapse in={showAdditionalWork} timeout="auto">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mt: 0.75 }}>
                {additionalProjects.map((proj, idx) => renderProjectCard(proj, idx))}
              </Box>
            </Collapse>
          </Box>
        )}
    </Box>
  );
}
