import React, { useState } from 'react';
import { Drawer } from './Drawer';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    title: { control: 'text' },
  },
};

const DrawerTemplate = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button label="Open Drawer" onClick={() => setOpen(true)} />
      <Drawer {...args} open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: '0 16px' }}>
          <p>Here you can place drawer content: forms, menus, settings, etc.</p>
        </div>
      </Drawer>
    </div>
  );
};

export const DefaultRight = DrawerTemplate.bind({});
DefaultRight.args = {
  position: 'right',
  title: 'Notification Settings',
};

export const PositionLeft = DrawerTemplate.bind({});
PositionLeft.args = {
  position: 'left',
  title: 'Main Menu',
};
