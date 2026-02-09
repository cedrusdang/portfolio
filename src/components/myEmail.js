import {useState} from "react";
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import StyledPaper from "./styledPaper.js";
import { email } from "../data/info.js";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Copied to clipboard:", text);
  }).catch(err => {
    console.error("Failed to copy:", err);
  });
}

export default function MyEmail() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailPop, setEmailPop] = useState(false);
  const theme = useTheme();

  const clickHandler = () => {
    copyToClipboard(email);
  };

  const handleButtonClick = () => {
    clickHandler();
    setCopied(true);   
    setEmailCopied(true);
    setEmailPop(true);
    setTimeout(() => setCopied(false), 100);
    setTimeout(() => setEmailPop(false), 200); // duration matches animation
  };

  return (
    <StyledPaper sx={{ marginTop: "1rem" }}>
      <StyledPaper>
        <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
          My Email
        </Typography>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            marginBottom: "0.5rem",
            }}
          >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  animation: emailPop ? 'pop 0.2s cubic-bezier(.36,1.7,.57,.99)' : 'none'
                }}
              >
                {emailCopied ? (
                  <MarkEmailReadRoundedIcon
                  fontSize="small"
                  color="action"
                  style={{ transform: "scale(1.2)" }}
                  onClick={handleButtonClick}
                  cursor="pointer"
                  title="Copy email to clipboard"
                  />
                ) : (
                  <EmailRoundedIcon
                  fontSize="small"
                  color="action"
                  style={{ transform: "scale(1.2)" }}
                  onClick={handleButtonClick}
                  cursor="pointer"
                  title="Copy email to clipboard"
                  />
                )}
              </span>
              <span style={{
                marginLeft: "0.4rem",
                fontFamily: "'Manrope', sans-serif",
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: "999px",
                padding: "0.15rem 0.65rem",
                cursor: "pointer",
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.06)'
                    : 'rgba(15, 76, 129, 0.08)',
                color: theme.palette.text.primary,
              }}
                onClick={handleButtonClick}
                title="Click to copy email"
                aria-label="Email address"
              >
                {email}
              </span>
              <button
                onClick={handleButtonClick}
                style={{
                  marginLeft: '0.4rem',
                  width: '1.5rem',
                  height: '1.5rem',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: 0,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: copied ? 'pop 0.2s cubic-bezier(.36,1.7,.57,.99)' : 'none'
                }}
                aria-label="Copy email"
              >
                <ContentCopyIcon fontSize="small" color={copied ? 'disabled' : 'action'} />
              </button>
            </div>
        <style>
          {`
            @keyframes pop {
              0% { transform: scale(1); }
              50% { transform: scale(1.3); }
              100% { transform: scale(1); }
            }
          `}
        </style>
      </StyledPaper>
    </StyledPaper>
  );
}
