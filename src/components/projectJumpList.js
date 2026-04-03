import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useLocation } from 'react-router-dom';

import StyledPaper from './styledPaper.js';
import useActiveProfile from '../hooks/useActiveProfile.js';
import { getProjectAnchorId } from '../data/projectAnchors.js';

const daMainSkillsByTitle = {
  'Internet Sales Analytics Dashboard': ['Data Analytics', 'KPI Tracking', 'Dashboard Design'],
  'Queensland Traffic Accidents Analysis (2001-2021)': ['Data Storytelling', 'Trend Analysis', 'Safety Insights'],
  'Queensland Traffic Accidents Analysis (2001–2021)': ['Data Storytelling', 'Trend Analysis', 'Safety Insights'],
  'Classification and Clustering of Low Birth Weight Mortality': [
    'Predictive Analytics',
    'Statistical Modelling',
    'Risk Segmentation',
  ],
  'Data Warehouse Project: Australian Road Fatality 2024': ['Data Warehousing', 'ETL Design', 'BI Reporting'],
  'Graph Database Project: Australian Road Fatality 2024': ['Graph Analytics', 'Data Modelling', 'Cypher Querying'],
  'Time Series Forecasting: Western Australian Temperature (GRU + VAE)': [
    'Forecasting Analytics',
    'Model Evaluation',
    'Trend Prediction',
  ],
};

export default function ProjectJumpList() {
  const { pathname } = useLocation();
  const { projects } = useActiveProfile();

  if (pathname.toLowerCase().startsWith('/datascience')) {
    return null;
  }

  const handleJumpToProject = (title) => {
    const target = document.getElementById(getProjectAnchorId(title));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <StyledPaper sx={{ borderRadius: 1, boxShadow: 'var(--shadow-1)' }}>
      <StyledPaper sx={{ borderRadius: 1 }}>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          Project Navigator
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
          {projects.map((project) => {
            const mainSkills = daMainSkillsByTitle[project.title] ?? ['Data Analysis'];

            return (
              <ButtonBase
                key={project.title}
                onClick={() => handleJumpToProject(project.title)}
                sx={{
                  textAlign: 'left',
                  justifyContent: 'flex-start',
                  width: '100%',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 1,
                  px: 1.1,
                  py: 1,
                  boxShadow: (theme) =>
                    theme.palette.mode === 'dark'
                      ? '0 8px 16px rgba(0,0,0,0.28)'
                      : '0 8px 18px rgba(17,24,39,0.12)',
                  transition: 'transform 0.16s ease, background-color 0.16s ease, box-shadow 0.16s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(108, 178, 255, 0.12)'
                        : 'rgba(15, 76, 129, 0.08)',
                    boxShadow: 'var(--shadow-1)',
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                    boxShadow: 'none',
                  },
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.35 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {mainSkills.slice(0, 3).join(' | ')}
                  </Typography>
                </Box>
              </ButtonBase>
            );
          })}
        </Box>
      </StyledPaper>
    </StyledPaper>
  );
}
