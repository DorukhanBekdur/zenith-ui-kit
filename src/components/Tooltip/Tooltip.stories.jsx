import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    title: { control: 'text' },
  },
};

export const Top = {
  args: {
    position: 'top',
    title: 'Top Tooltip info',
    children: <Button label="Hover Me (Top)" variant="outline" />,
  },
};

export const Bottom = {
  args: {
    position: 'bottom',
    title: 'Bottom Tooltip info',
    children: <Button label="Hover Me (Bottom)" variant="ghost" />,
  },
};
