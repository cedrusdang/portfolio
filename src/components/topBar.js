import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Link, useLocation } from 'react-router-dom';

import useActiveProfile from '../hooks/useActiveProfile.js';

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



// Main function
export default function TopAppBar({darkMode, setDarkMode}) {

  const isMedium = useMediaQuery('(max-width:750px)');
  const isSmall = useMediaQuery('(max-width:571px)');
  const { pathname } = useLocation();
  const homePath = pathname.toLowerCase().startsWith('/datascience')
    ? '/datascience'
    : '/';
  const { ownerName, topbarIntro } = useActiveProfile();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={theme => ({
        bgcolor: theme.palette.background.paper,
        borderBottom: '1px solid',
        borderColor: theme.palette.divider,
        color: theme.palette.text.primary,
        width: '100%',
      })}
    >
      <Toolbar
        disableGutters
        sx={{
          width: '100%',
          height: '3.5rem',
          minHeight: '3.5rem !important',
          px: '5vw'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, minWidth: 0 }}>
          <TopLogoIcon />
          <TopNameOwner isSmall={isSmall} ownerName={ownerName} homePath={homePath} />
          {!isMedium && <TopPortfolioIntro topbarIntro={topbarIntro} sx={{ alignItems: 'center' }} />}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <DarkLightBtn darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
