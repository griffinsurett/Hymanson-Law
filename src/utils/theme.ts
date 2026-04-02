// src/constants/theme.ts
/**
 * Theme-related constants shared between Astro layouts and React hooks.
 */

export const ACCENT_COLORS = [
  "var(--color-primary)",
] as const;

export type AccentColor = (typeof ACCENT_COLORS)[number];

export const DEFAULT_THEME: "light" | "dark" = "dark";
