import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'] 
    },
    weight: { control: 'select', options: ['normal', 'medium', 'semibold', 'bold'] },
    align: { control: 'select', options: ['left', 'center', 'right'] },
    color: { control: 'select', options: ['main', 'muted', 'primary', 'secondary', 'white'] },
  },
};

export const DisplayHeadings = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Typography variant="h1">Heading 1: Zenith UI</Typography>
    <Typography variant="h2">Heading 2: Zenith UI</Typography>
    <Typography variant="h3">Heading 3: Zenith UI</Typography>
    <Typography variant="h4">Heading 4: Zenith UI</Typography>
    <Typography variant="h5">Heading 5: Zenith UI</Typography>
    <Typography variant="h6">Heading 6: Zenith UI</Typography>
  </div>
);

export const BodyTexts = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Typography variant="body1">Body 1: The quick brown fox jumps over the lazy dog. A sturdy and reliable font body text.</Typography>
    <Typography variant="body2">Body 2: A slightly smaller text variation for dense spaces.</Typography>
    <Typography variant="caption" color="muted">Caption: Used for tiny annotations and hints.</Typography>
  </div>
);
