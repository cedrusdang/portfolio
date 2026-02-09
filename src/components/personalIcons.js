import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function PersonalIcons() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.paper,
                width: '6rem',
                height: '6rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                boxShadow:
                    theme.palette.mode === 'dark'
                        ? `0 6px 16px rgba(0,0,0,0.35)`
                        : `0 6px 16px rgba(17,24,39,0.12)`,
                transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1)',
                m: '0.5rem',
                transform: 'perspective(600px) rotateX(6deg) scale(1)',
                border: `1px solid ${theme.palette.divider}`,
            }}
        >
            <img
                src={'/MyIcon.webp'}
                alt="Personal Icon"
                style={{
                    width: '4rem',
                    height: 'auto',
                    borderRadius: '50%',
                }}
            />
        </Box>
    );
}
