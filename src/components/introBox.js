import StyledPaper from './styledPaper.js';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const introParagraphs = [
  [
    { text: 'I build ', highlight: false },
    { text: 'data solutions', highlight: true },
    { text: ' that help teams ', highlight: false },
    { text: 'understand their operations', highlight: true },
    { text: ', ', highlight: false },
    { text: 'make decisions with confidence', highlight: true },
    { text: ', and ', highlight: false },
    { text: 'automate the work', highlight: true },
    { text: ' that slows them down.', highlight: false },
  ],
  [
    { text: 'My portfolio highlights practical projects across ', highlight: false },
    { text: 'analytics', highlight: true },
    { text: ', ', highlight: false },
    { text: 'reporting', highlight: true },
    { text: ', ', highlight: false },
    { text: 'data modelling', highlight: true },
    { text: ', ', highlight: false },
    { text: 'automation', highlight: true },
    { text: ', and ', highlight: false },
    { text: 'system design', highlight: true },
    { text: '. Each project reflects the skills I use every day as a ', highlight: false },
    { text: 'Data Analyst', highlight: true },
    { text: ' including ', highlight: false },
    { text: 'SQL', highlight: true },
    { text: ', ', highlight: false },
    { text: 'Python', highlight: true },
    { text: ', ', highlight: false },
    { text: 'Power BI', highlight: true },
    { text: ', ', highlight: false },
    { text: 'Tableau', highlight: true },
    { text: ', ', highlight: false },
    { text: 'data cleaning', highlight: true },
    { text: ', ', highlight: false },
    { text: 'validation', highlight: true },
    { text: ', ', highlight: false },
    { text: 'exploratory analysis', highlight: true },
    { text: ', and ', highlight: false },
    { text: 'operational reporting', highlight: true },
    { text: '.', highlight: false },
  ],
  [
    { text: 'I focus on creating ', highlight: false },
    { text: 'clear insights', highlight: true },
    { text: ', ', highlight: false },
    { text: 'reliable data pipelines', highlight: true },
    { text: ', and ', highlight: false },
    { text: 'dashboards', highlight: true },
    { text: ' that are easy for business users to work with. My goal is to ', highlight: false },
    { text: 'bring structure to messy data', highlight: true },
    { text: ', ', highlight: false },
    { text: 'improve processes', highlight: true },
    { text: ', and ', highlight: false },
    { text: 'deliver analysis', highlight: true },
    { text: ' that supports ', highlight: false },
    { text: 'real business outcomes', highlight: true },
    { text: '.', highlight: false },
  ],
];

const dataScienceIntroParagraphs = [
  [
    { text: 'I build ', highlight: false },
    { text: 'end to end data and AI systems', highlight: true },
    { text: ' that cover from research and modelling to full stack development and deployment.', highlight: false },
  ],
  [
    { text: 'My work spans ', highlight: false },
    { text: 'machine learning', highlight: true },
    { text: ', ', highlight: false },
    { text: 'deep learning', highlight: true },
    { text: ', ', highlight: false },
    { text: 'NLP', highlight: true },
    { text: ', ', highlight: false },
    { text: 'computer vision', highlight: true },
    { text: ', ', highlight: false },
    { text: 'LLM and agentic workflows', highlight: true },
    { text: ', and the engineering needed to deploy them reliably. I focus on ', highlight: false },
    { text: 'clean data pipelines', highlight: true },
    { text: ', ', highlight: false },
    { text: 'solid modelling', highlight: true },
    { text: ', and practical AI applications that solve real business needs.', highlight: false },
  ],
  [
    { text: 'This portfolio highlights projects across ', highlight: false },
    { text: 'AI agents', highlight: true },
    { text: ', ', highlight: false },
    { text: 'LLM apps', highlight: true },
    { text: ', ', highlight: false },
    { text: 'IoT systems', highlight: true },
    { text: ', ', highlight: false },
    { text: 'full-stack ML', highlight: true },
    { text: ', ', highlight: false },
    { text: 'data engineering', highlight: true },
    { text: ', and ', highlight: false },
    { text: 'analytics', highlight: true },
    { text: ', showing how I combine technical depth with system thinking to deliver solutions that are ', highlight: false },
    { text: 'robust', highlight: true },
    { text: ', ', highlight: false },
    { text: 'explainable', highlight: true },
    { text: ', and ', highlight: false },
    { text: 'ready for production', highlight: true },
    { text: '.', highlight: false },
  ],
];

export default function IntroBox(){
  const { pathname } = useLocation();
  const isDataScience = pathname.toLowerCase().startsWith('/datascience');
  const activeIntroParagraphs = isDataScience
    ? dataScienceIntroParagraphs
    : introParagraphs;

  return (
    <StyledPaper sx={{ mt: 0, mb: '1rem' }}>
      <StyledPaper sx={{ textAlign: 'left' }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 0.75,
            color: 'primary.main',
            letterSpacing: '0.01em',
          }}
        >
          Intro
        </Typography>

        {activeIntroParagraphs.map((paragraph, paragraphIndex) => (
          <Typography
            key={paragraphIndex}
            variant="body2"
            sx={{
              textAlign: 'justify',
              color: 'text.secondary',
              lineHeight: 1.75,
              mb: paragraphIndex < activeIntroParagraphs.length - 1 ? 1 : 0,
              '& .intro-highlight': {
                color: (theme) =>
                  theme.palette.mode === 'dark' ? '#ffd7bf' : '#6b3a1f',
                fontWeight: 700,
                textDecoration: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'underline rgba(242, 164, 119, 0.65)'
                    : 'underline rgba(201, 107, 75, 0.45)',
                textDecorationThickness: '1.5px',
                textUnderlineOffset: '2px',
              },
            }}
          >
            {paragraph.map((part, index) => (
              <Typography
                key={`${paragraphIndex}-${index}`}
                component="span"
                className={part.highlight ? 'intro-highlight' : ''}
              >
                {part.text}
              </Typography>
            ))}
          </Typography>
        ))}
      </StyledPaper>
    </StyledPaper>
  );
}

