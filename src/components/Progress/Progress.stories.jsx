import React from 'react';
import { Progress } from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    variant: { control: 'select', options: ['linear', 'circular'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'error'] },
  },
};

export const Linear = {
  args: {
    value: 40,
    variant: 'linear',
    size: 'md',
    color: 'primary',
  },
};

export const Circular = {
  args: {
    value: 75,
    variant: 'circular',
    size: 'lg',
    color: 'secondary',
  },
};
