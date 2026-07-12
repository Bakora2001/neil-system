/**
 * NEIL / NDIP brand tokens — single source of truth.
 * Mirrored in tailwind.config.ts as `ndip-*` colour utilities.
 */
export const colors = {
  indigo: "#2E307A", // primary — headers, nav, primary buttons
  navy: "#1A237E", // secondary — hover/active states, footer
  orange: "#ED9E48", // accent — CTAs, icons, active nav
  orangeAlt: "#EF9D4A", // accent alt — tags, highlights
  cream: "#FDF5EC", // section backgrounds, cards
  white: "#FFFFFF",
  ink: "#101828", // body text
} as const;

export type ThemeColor = keyof typeof colors;
