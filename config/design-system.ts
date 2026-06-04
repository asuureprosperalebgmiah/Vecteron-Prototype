export const designSystem = {
  tone: {
    professional: 85,
    creative: 15
  },
  colors: {
    ink: "rgb(18 24 38)",
    muted: "rgb(86 96 115)",
    canvas: "rgb(247 249 252)",
    surface: "rgb(255 255 255)",
    line: "rgb(220 226 235)",
    primary: "rgb(22 78 99)",
    accent: "rgb(198 145 66)",
    success: "rgb(34 122 93)"
  },
  radii: {
    control: "0.5rem",
    card: "0.5rem",
    panel: "1rem"
  },
  motion: {
    preferred: ["fade-in sections", "hover transitions", "gentle scroll reveals", "button micro-interactions"],
    avoided: ["excessive parallax", "constant motion", "spinning elements", "auto-playing media"]
  }
} as const;
