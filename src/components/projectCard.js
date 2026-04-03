import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import StyledPaper from './styledPaper';

export default function ReviewCard({title, subheader, image, description, techStack, expandDescription, githubURL, liveURL}) {
  const [isImageOpen, setIsImageOpen] = React.useState(false);
  const isPowerBiLiveUrl = typeof liveURL === 'string' && liveURL.includes('app.powerbi.com');

  return (
    <StyledPaper sx={{ height: '100%', display: 'flex' }}>
      <Card
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        <CardHeader
          sx={{ textAlign: 'center' }}
          title={title}
          subheader={techStack}
          titleTypographyProps={{
            sx: { fontWeight: 600, letterSpacing: '0.01em' },
          }}
          subheaderTypographyProps={{
            sx: { color: 'text.secondary' },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.04)'
                : 'rgba(15, 76, 129, 0.05)',
            height: '40vh',
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={image}
            loading="lazy"
            onClick={() => setIsImageOpen(true)}
            sx={{
              maxHeight: '40vh',
              maxWidth: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0.5rem',
              objectFit: 'contain',
              cursor: 'zoom-in',
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', textAlign: 'justify' }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: '1rem', marginTop: 'auto' }}>
          {githubURL && (
            <IconButton
              aria-label="github"
              component="a"
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <GitHubIcon />
            </IconButton>
          )}
          {liveURL && (
            <Button
              component="a"
              href={liveURL}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              variant="outlined"
              startIcon={<OpenInNewIcon fontSize="small" />}
              sx={{
                ml: 0.75,
                ...(isPowerBiLiveUrl
                  ? {
                      borderWidth: 1.5,
                      fontWeight: 700,
                      letterSpacing: '0.01em',
                      borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#6cb2ff' : '#0f4c81',
                      color: (theme) =>
                        theme.palette.mode === 'dark' ? '#cde6ff' : '#0f4c81',
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(108, 178, 255, 0.12)'
                          : 'rgba(15, 76, 129, 0.08)',
                      boxShadow: 'none',
                      '&:hover': {
                        borderColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#8ec6ff' : '#124f86',
                        color: (theme) =>
                          theme.palette.mode === 'dark' ? '#e7f2ff' : '#124f86',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(108, 178, 255, 0.2)'
                            : 'rgba(15, 76, 129, 0.14)',
                        boxShadow: 'var(--shadow-1)',
                      },
                    }
                  : {}),
              }}
            >
              {isPowerBiLiveUrl ? 'View Online Power BI App' : 'Live'}
            </Button>
          )}
        </CardActions>
      </Card>

      <Dialog
        open={isImageOpen}
        onClose={() => setIsImageOpen(false)}
        maxWidth={false}
        PaperProps={{
          sx: {
            width: 'min(92vw, 1200px)',
            maxHeight: '90vh',
            borderRadius: 1,
            backgroundImage: 'none',
            overflow: 'hidden',
          },
        }}
      >
        <Box sx={{ position: 'relative', backgroundColor: 'background.paper' }}>
          <IconButton
            onClick={() => setIsImageOpen(false)}
            aria-label="Close image preview"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(11,16,22,0.7)'
                  : 'rgba(255,255,255,0.8)',
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              display: 'block',
              width: '100%',
              height: 'auto',
              maxHeight: '90vh',
              objectFit: 'contain',
              backgroundColor: 'background.default',
            }}
          />
        </Box>
      </Dialog>
    </StyledPaper>
  );
}
