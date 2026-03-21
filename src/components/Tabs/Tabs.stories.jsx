import React from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

const defaultTabs = [
  { id: 'tab1', label: 'Overview', content: <div style={{ padding: '16px 0' }}>Project overview and core statistics go here.</div> },
  { id: 'tab2', label: 'Analytics', content: <div style={{ padding: '16px 0' }}>Detailed charts and data analysis views.</div> },
  { id: 'tab3', label: 'Settings', content: <div style={{ padding: '16px 0' }}>Configure your personal preferences.</div> },
];

export const Default = {
  args: {
    tabs: defaultTabs,
  },
};

export const PreSelected = {
  args: {
    tabs: defaultTabs,
    defaultTab: 'tab2',
  },
};
