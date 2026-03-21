import React, { useState } from 'react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    total: { control: 'number' },
  },
};

const Template = (args) => {
  const [current, setCurrent] = useState(1);
  return <Pagination {...args} current={current} onChange={setCurrent} />;
};

export const Default = Template.bind({});
Default.args = {
  total: 5,
};

export const LargePageCount = Template.bind({});
LargePageCount.args = {
  total: 10,
};
