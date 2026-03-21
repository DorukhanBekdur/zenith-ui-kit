import React from 'react';
import { Box } from './Box';

export default {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    padding: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    margin: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    background: { control: 'select', options: ['white', 'main', 'paper'] },
    borderRadius: { control: 'select', options: ['sm', 'md', 'lg', 'pill'] },
    border: { control: 'select', options: ['main'] },
    shadow: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export const Default = {
  args: {
    padding: 'lg',
    background: 'white',
    borderRadius: 'md',
    border: 'main',
    shadow: 'sm',
    children: 'This is a Box component. It acts as a versatile wrapper for other contents and provides easy layout utilities.',
  },
};

export const CustomStyling = {
  args: {
    padding: 'xl',
    background: 'paper',
    borderRadius: 'lg',
    shadow: 'lg',
    children: 'A profoundly customized Box serving as a card base or elevated surface.',
  },
};
