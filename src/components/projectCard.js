import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import StyledPaper from './styledPaper';

export default function ReviewCard({title, subheader, image, description, techStack, expandDescription, githubURL}) {

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
            sx={{
              maxHeight: '40vh',
              maxWidth: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0.5rem',
              objectFit: 'contain',
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
        </CardActions>
      </Card>
    </StyledPaper>
  );
}
