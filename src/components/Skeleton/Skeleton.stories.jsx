import React from 'react';
import { Skeleton } from './Skeleton';
import { Stack } from '../Stack/Stack';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'rectangular', 'circle'],
    },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export const Default = {
  args: {
    variant: 'text',
    width: '100%',
  },
};

export const GroupCard = () => (
  <Stack spacing="md" style={{ width: 300 }}>
    <Stack direction="row" spacing="md" align="center">
      <Skeleton variant="circle" width={40} height={40} />
      <Stack spacing="sm" style={{ flex: 1 }}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
      </Stack>
    </Stack>
    <Skeleton variant="rectangular" height={150} />
  </Stack>
);
