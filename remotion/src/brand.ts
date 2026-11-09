// Video brand tokens (see /brand.md). Import these in every shot
// so all videos stay consistent; change a value here and every shot updates.
//
// Des in the Cloud: berry + plum on warm cream. Set by /brand-setup.
// Keep this file, /brand.md and fonts.ts in sync.
import { Easing } from 'remotion';

// Channel identity. Any shot that puts your name on screen reads it from here,
// so one edit re-brands every video you have ever made in this repo.
export const BRAND = {
  // The wordmark, split in three so the MIDDLE part renders in the accent color.
  // e.g. ['Des', 'in the', 'Cloud'] renders "in the" in berry.
  // Parts are concatenated with no gap, so the spaces live inside the values.
  // Use ['Acme', 'Labs', ''] for a two-part mark.
  wordmark: ['Des ', 'in the', ' Cloud'] as readonly string[],
  signoff: 'Keep going. See you in the next one.',
} as const;

export const COLORS = {
  // roles
  accent: '#C2185B', // berry — primary
  accent2: '#7B3FA0', // plum-violet — secondary
  signal: '#1F8A7D', // teal — success / "free"
  signalAlt: '#2BB3A3', // teal companion
  warn: '#F2B84B', // amber — attention
  danger: '#D64545', // red — contrast / error
  ink: '#2B1B3D', // deep plum — primary text on light
  muted: '#6B5A78', // secondary text
  paper: '#FFF9F3', // warm cream — light surface / bg
  cream: '#F8EFE6', // alt light band
  line: '#EADFD3', // 1px borders on light
  // dark UI / terminal scale (GitHub-ink)
  d900: '#0d1117',
  d800: '#161b22',
  d600: '#30363d',
  d400: '#8b949e',
  d300: '#c9d1d9',
} as const;

// signature gradient: berry -> plum -> teal
export const GRADIENT = `linear-gradient(120deg, ${COLORS.accent}, ${COLORS.accent2}, ${COLORS.signal})`;

export const RADIUS = { card: 16, panel: 14, window: 10, pill: 999 } as const;

export const SHADOW = {
  soft: '0 8px 32px rgba(43,27,61,0.10)',
  card: '0 10px 40px rgba(43,27,61,0.08)',
} as const;

// Calm, premium easings (confirmed brand motion). Use these — never Easing.out(...) wrappers.
export const EASINGS = {
  easeOut: Easing.bezier(0.33, 1, 0.68, 1),
  easeIn: Easing.bezier(0.32, 0, 0.67, 0),
  easeInOut: Easing.bezier(0.37, 0, 0.63, 1),
  overshoot: Easing.bezier(0.34, 1.4, 0.64, 1), // gentle, no cartoon bounce
} as const;
