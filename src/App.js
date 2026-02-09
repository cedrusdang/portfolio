import { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Fab, GlobalStyles, Zoom, useTheme } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import GalaxyBackground from "./components/backGround.js";
import TopAppBar from "./components/topBar.js";
import About from "./views/home.js";
import BottomBar from "./components/bottomBar.js";

function AppGlobalStyles() {
  const theme = useTheme();
  return (
    <GlobalStyles
      styles={{
        ":root": {
          "--shadow-1":
            theme.palette.mode === "dark"
              ? "0 12px 30px rgba(0,0,0,0.35)"
              : "0 12px 30px rgba(17,24,39,0.08)",
          "--shadow-2":
            theme.palette.mode === "dark"
              ? "0 20px 60px rgba(0,0,0,0.45)"
              : "0 20px 60px rgba(17,24,39,0.14)",
          "--border-subtle":
            theme.palette.mode === "dark"
              ? "rgba(231,237,245,0.12)"
              : "rgba(27,36,48,0.12)",
        },
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(circle at 15% 20%, rgba(108, 178, 255, 0.18), rgba(11, 16, 22, 0) 45%), radial-gradient(circle at 80% 0%, rgba(242, 164, 119, 0.12), rgba(11, 16, 22, 0) 40%), linear-gradient(180deg, #0b1016 0%, #0f151d 70%, #0b1016 100%)"
              : "radial-gradient(circle at 15% 20%, rgba(15, 76, 129, 0.08), rgba(246, 244, 241, 0) 45%), radial-gradient(circle at 85% 10%, rgba(201, 107, 75, 0.12), rgba(246, 244, 241, 0) 40%), linear-gradient(180deg, #f6f4f1 0%, #f8fafc 70%, #f3f1ee 100%)",
          color: theme.palette.text.primary,
          margin: 0,
          fontFamily: theme.typography.fontFamily,
          lineHeight: 1.6,
        },
        "::selection": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(108, 178, 255, 0.35)"
              : "rgba(15, 76, 129, 0.25)",
        },
        a: {
          color: "inherit",
        },
        code: {
          fontFamily:
            '"JetBrains Mono", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        },
      }}
    />
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 320);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#6cb2ff" : "#0f4c81",
          },
          secondary: {
            main: darkMode ? "#f2a477" : "#c96b4b",
          },
          info: {
            main: darkMode ? "#7dd3fc" : "#0ea5e9",
          },
          background: {
            default: darkMode ? "#0b1016" : "#f6f4f1",
            paper: darkMode ? "#121a23" : "#ffffff",
          },
          text: {
            primary: darkMode ? "#e7edf5" : "#1b2430",
            secondary: darkMode ? "#a8b4c6" : "#49566a",
          },
          divider: darkMode
            ? "rgba(231,237,245,0.12)"
            : "rgba(27,36,48,0.12)",
        },

        typography: {
          fontFamily:
            '"Manrope", system-ui, -apple-system, "Segoe UI", sans-serif',
          h1: { fontFamily: '"Fraunces", serif', fontWeight: 700 },
          h2: { fontFamily: '"Fraunces", serif', fontWeight: 700 },
          h3: { fontFamily: '"Fraunces", serif', fontWeight: 600 },
          h4: { fontFamily: '"Fraunces", serif', fontWeight: 600 },
          h5: { fontFamily: '"Fraunces", serif', fontWeight: 600 },
          h6: { fontFamily: '"Fraunces", serif', fontWeight: 600 },
        },

        shape: {
          borderRadius: 16,
        },

        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: "none",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-1)",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-1)",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 999,
                paddingLeft: "1.25rem",
                paddingRight: "1.25rem",
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: "inherit",
              },
            },
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <AppGlobalStyles />

        <GalaxyBackground />

        <>
          <header>
            <TopAppBar darkMode={darkMode} setDarkMode={setDarkMode} />
          </header>

          <Box
            component="main"
            sx={{
              p: { xs: 1.5, md: 3 },
              maxWidth: "lg",
              mx: "auto",
              mt: { xs: 2, md: 3 },
            }}
          >
            <Routes>
              <Route path="/" element={<About />} />
            </Routes>
          </Box>

          <footer>
            <BottomBar />
          </footer>
        </>

        <Zoom in={showToTop}>
          <Fab
            aria-label="Back to top"
            color="primary"
            size="medium"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              position: "fixed",
              right: { xs: 16, md: 24 },
              bottom: { xs: 16, md: 24 },
              zIndex: 10,
              boxShadow: "var(--shadow-2)",
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </Router>
    </ThemeProvider>
  );
}

export default App;
