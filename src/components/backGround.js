import { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';

function randomStars(n, densityMultiplier) {
  return Array.from({ length: n }).map((_, i) => ({
    top: Math.random() * 100 + "vh",
    left: Math.random() * 95 + "vw",
    size: 0.6 + Math.random() * 1.6 * densityMultiplier + "px",
    opacity: 0.2 + Math.random() * 0.6,
    key: i,
  }));
}

export default function GalaxyBackground() {
  const [stars, setStars] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    function updateStars() {
      const w = window.innerWidth, h = window.innerHeight;
      const density = theme.palette.mode === "dark" ? 0.22 : 0.12;
      const N_STARS = Math.round(density * (w + h));
      setStars(randomStars(N_STARS, theme.palette.mode === "dark" ? 1 : 0.8));
    }
    updateStars();
    window.addEventListener("resize", updateStars);
    return () => window.removeEventListener("resize", updateStars);
  }, [theme.palette.mode]);

  const starColor =
    theme.palette.mode === "dark"
      ? "rgba(226, 235, 248, 0.9)"
      : "rgba(31, 41, 55, 0.22)";
  const starGlow =
    theme.palette.mode === "dark"
      ? "0 0 8px 2px rgba(226, 235, 248, 0.6)"
      : "0 0 6px 1px rgba(31, 41, 55, 0.15)";
  return (
    <div style={{ position: "fixed", inset: 0, width: "100%", height: "100vh", zIndex: -1 }}>
      {stars.map(star => (
        <div key={star.key} style={{
          position: "absolute",
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          borderRadius: "50%",
          background: starColor,
          opacity: star.opacity,
          boxShadow: starGlow,
          pointerEvents: "none"
        }} />
      ))}
    </div>
  );
}
