import React, { useState } from 'react';
import { Snackbar } from './Snackbar';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    message: { control: 'text' },
  },
};

const Template = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label="Show Snackbar" onClick={() => setOpen(true)} />
      <Snackbar 
        {...args} 
        open={open} 
        onClose={() => setOpen(false)} 
      />
    </>
  );
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  message: 'This is an informative message.',
  autoHideDuration: 3000,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  message: 'Action completed successfully!',
  autoHideDuration: 3000,
};
