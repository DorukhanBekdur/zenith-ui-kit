import React from 'react';
import { Accordion } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: { control: 'boolean' },
  },
};

const defaultItems = [
  {
    title: 'What is Zenith UI?',
    content: 'Zenith UI is a modern React component library focusing on premium aesthetics and accessible interactions.',
  },
  {
    title: 'Is it open source?',
    content: 'Yes, it is entirely open source and free to use in your personal or commercial projects.',
  },
  {
    title: 'How do I customize the theme?',
    content: 'You can easily customize the theme by overriding the CSS variables provided in the root styles.',
  },
];

export const Default = {
  args: {
    items: defaultItems,
    allowMultiple: false,
  },
};

export const AllowMultiple = {
  args: {
    items: defaultItems,
    allowMultiple: true,
  },
};
