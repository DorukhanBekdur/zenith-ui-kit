import React from 'react';
import { Avatar, AvatarGroup } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
    },
  },
};

export const Initials = {
  args: {
    name: 'Dorukhan Bekdur',
    size: 'md',
    shape: 'circle',
  },
};

export const WithImage = {
  args: {
    name: 'User Name',
    src: 'https://i.pravatar.cc/150?u=zenith',
    size: 'md',
    shape: 'circle',
  },
};

export const Group = () => (
  <AvatarGroup max={3}>
    <Avatar name="Alice" />
    <Avatar name="Bob" />
    <Avatar name="Charlie" />
    <Avatar name="Dave" />
    <Avatar name="Eve" />
  </AvatarGroup>
);
