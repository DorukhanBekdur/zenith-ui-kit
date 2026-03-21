import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text' },
  },
};

const sampleItems = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Navigation' },
];

export const Default = {
  args: {
    items: sampleItems,
    separator: '/',
  },
};

export const CustomSeparator = {
  args: {
    items: sampleItems,
    separator: '>',
  },
};
