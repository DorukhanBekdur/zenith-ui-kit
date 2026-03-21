import React, { useState } from 'react';
import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  return <Switch {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Enable Notifications',
  size: 'md',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Switch',
  disabled: true,
  checked: false,
};
