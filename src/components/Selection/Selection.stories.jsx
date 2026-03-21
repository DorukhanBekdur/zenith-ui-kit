import React, { useState } from 'react';
import { Checkbox, Radio } from './Selection';
import { Stack } from '../Stack/Stack';

export default {
  title: 'Components/Selection',
  tags: ['autodocs'],
};

export const Checkboxes = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack spacing="md">
      <Checkbox 
        label="Accept Terms & Conditions" 
        checked={checked} 
        onChange={(e) => setChecked(e.target.checked)} 
      />
      <Checkbox label="Disabled Checkbox" disabled />
      <Checkbox label="Disabled Checked" disabled checked />
    </Stack>
  );
};

export const Radios = () => {
  const [selected, setSelected] = useState('option1');
  return (
    <Stack spacing="md">
      <Radio 
        name="demo" 
        value="option1" 
        label="Option 1" 
        checked={selected === 'option1'} 
        onChange={(e) => setSelected(e.target.value)} 
      />
      <Radio 
        name="demo" 
        value="option2" 
        label="Option 2" 
        checked={selected === 'option2'} 
        onChange={(e) => setSelected(e.target.value)} 
      />
      <Radio label="Disabled Radio" disabled />
    </Stack>
  );
};
