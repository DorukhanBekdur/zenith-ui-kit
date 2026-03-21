import React from 'react';
import { Stack } from './Stack';
import { Box } from '../Box/Box';

export default {
  title: 'Components/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['column', 'row', 'column-reverse', 'row-reverse'] },
    spacing: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    align: { control: 'select', options: ['flex-start', 'center', 'flex-end', 'stretch'] },
    justify: { control: 'select', options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'] },
    wrap: { control: 'select', options: ['nowrap', 'wrap', 'wrap-reverse'] },
  },
};

const items = Array.from({ length: 3 }).map((_, i) => (
  <Box key={i} padding="md" background="paper" border="main" borderRadius="sm">
    Item {i + 1}
  </Box>
));

export const Column = {
  args: {
    direction: 'column',
    spacing: 'md',
    children: items,
  },
};

export const Row = {
  args: {
    direction: 'row',
    spacing: 'lg',
    align: 'center',
    children: items,
  },
};
