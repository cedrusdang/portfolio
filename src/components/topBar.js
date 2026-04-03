import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FormGroup, FormControlLabel, Switch, Button, Menu, MenuItem } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import useActiveProfile from '../hooks/useActiveProfile.js';
import { getProjectAnchorId } from '../data/projectAnchors.js';

const logoPic = `${process.env.PUBLIC_URL}/images/logo.png`

function DarkLightBtn({ darkMode, setDarkMode }) {
  return (
    <FormGroup
      sx={{
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0px'
      }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={e => setDarkMode(e.target.checked)}
          />
        }
        label={darkMode ? <DarkModeOutlinedIcon/> : <DarkModeIcon/>}
        sx={{ margin: '0px' }}
      />
    </FormGroup>
  );
}

function TopLogoIcon() {
  return (
    <Box
      component="img"
      src={logoPic}
      alt="Logo"
      sx={{
        height: 32,
        width: 32,
        borderRadius: '5px',
        mr: '14px',
        transition: 'transform 1.5s cubic-bezier(.4,2,.6,1)',
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
        '&:hover': { transform: 'rotateY(180deg) rotateX(30deg)' },
      }}
    />
  );
}

function TopNameOwner({ isSmall, ownerName, homePath }) {
  let fontSize = isSmall ? 14 : 22;
  return (
    <Typography
      Wrap
      component={Link}
      to={homePath}
      sx={theme => ({
        fontWeight: 700,
        color: theme.palette.text.primary,
        fontSize,
        letterSpacing: '0.01em',
        textDecoration: 'none',
        fontFamily: '"Fraunces", serif',
      })}
    >
      {ownerName}
    </Typography>
  );
}

function TopPortfolioIntro({ topbarIntro }) {
  return (
    <Typography
      component="a"
      sx={theme => ({
        fontWeight: 500,
        color: theme.palette.text.secondary,
        fontSize: 20,
        letterSpacing: 0,
        textDecoration: 'none',
        fontFamily: '"Manrope", sans-serif',
        ml: 2
      })}
    >
      {topbarIntro}
    </Typography>
  );
}

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

function ProjectMenu({ pathname, projects }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleJumpToProject = (title) => {
    const target = document.getElementById(getProjectAnchorId(title));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        endIcon={<MenuIcon fontSize="small" />}
        sx={{
          borderRadius: 1,
          minWidth: 'fit-content',
          px: 1.2,
          py: 0.55,
          borderColor: 'divider',
          color: 'text.primary',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(108, 178, 255, 0.08)'
              : 'rgba(15, 76, 129, 0.05)',
          '&:hover': {
            borderColor: 'primary.main',
            bgcolor: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(108, 178, 255, 0.16)'
                : 'rgba(15, 76, 129, 0.12)',
          },
        }}
      >
        Projects
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            maxHeight: '68vh',
            width: { xs: '88vw', sm: 430 },
            border: '1px solid var(--border-subtle)',
          },
        }}
      >
        {projects.map((project, index) => {
          const mainSkills =
            daMainSkillsByTitle[project.title] ??
            (project.techStack
              ? project.techStack
                  .split('|')
                  .map((skill) => skill.trim())
                  .filter(Boolean)
                  .slice(0, 3)
              : ['Data Analysis']);
          return (
            <MenuItem
              key={project.title}
              onClick={() => handleJumpToProject(project.title)}
              sx={{
                alignItems: 'flex-start',
                whiteSpace: 'normal',
                py: 1,
              }}
            >
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.25 }}>
                  {`${index + 1}. ${project.title}`}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {mainSkills.slice(0, 3).join(' | ')}
                </Typography>
              </Box>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}



// Main function
export default function TopAppBar({darkMode, setDarkMode}) {

  const isMedium = useMediaQuery('(max-width:750px)');
  const isSmall = useMediaQuery('(max-width:571px)');
  const { pathname } = useLocation();
  const homePath = pathname.toLowerCase().startsWith('/datascience')
    ? '/datascience'
    : '/';
  const { ownerName, topbarIntro, projects } = useActiveProfile();
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={theme => ({
        bgcolor: theme.palette.background.paper,
        borderBottom: '1px solid',
        borderColor: theme.palette.divider,
        color: theme.palette.text.primary,
        width: '100%',
        top: 0,
        left: 0,
        zIndex: theme.zIndex.appBar,
      })}
    >
      <Toolbar
        disableGutters
        sx={{
          width: '100%',
          maxWidth: 'lg',
          mx: 'auto',
          height: '3.5rem',
          minHeight: '3.5rem !important',
          px: { xs: 1.5, md: 3 },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, minWidth: 0 }}>
          <TopLogoIcon />
          <TopNameOwner isSmall={isSmall} ownerName={ownerName} homePath={homePath} />
          {!isMedium && <TopPortfolioIntro topbarIntro={topbarIntro} sx={{ alignItems: 'center' }} />}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ProjectMenu pathname={pathname} projects={projects} />
          <DarkLightBtn darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
