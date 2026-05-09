import React from 'react';
import { Svg, Path, Circle, Rect } from '@react-pdf/renderer';

const iconSize = 14;
const iconColor = '#cbd5e1'; // slate-300

export const PdfMailIcon = () => (
  <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </Svg>
);

export const PdfPhoneIcon = () => (
  <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.219-.995-.61-1.383l-2.433-2.433a2.25 2.25 0 00-3.182 0l-1.35 1.35a1.125 1.125 0 01-1.582 0l-2.828-2.828a1.125 1.125 0 010-1.582l1.35-1.35a2.25 2.25 0 000-3.182L7.614 3.61a2.25 2.25 0 00-1.383-.61H3.75A2.25 2.25 0 001.5 5.25v1.5z" />
  </Svg>
);

export const PdfLocationIcon = () => (
  <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <Path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </Svg>
);

export const PdfLinkedInIcon = () => (
  <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <Rect x={2} y={9} width={4} height={12} />
    <Circle cx={4} cy={4} r={2} />
  </Svg>
);

export const PdfGitHubIcon = () => (
  <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </Svg>
);