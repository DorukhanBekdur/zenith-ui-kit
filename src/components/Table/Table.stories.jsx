import React from 'react';
import { Table } from './Table';
import { Badge } from '../Badge/Badge';

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

const columns = [
  { key: 'name', title: 'User Name' },
  { key: 'role', title: 'Role' },
  { 
    key: 'status', 
    title: 'Status',
    render: (val) => <Badge variant={val === 'Active' ? 'success' : 'neutral'}>{val}</Badge>
  },
];

const data = [
  { name: 'Dorukhan Bekdur', role: 'Lead Architect', status: 'Active' },
  { name: 'Jane Doe', role: 'Designer', status: 'Active' },
  { name: 'John Smith', role: 'Developer', status: 'Inactive' },
];

export const Default = {
  args: {
    columns,
    data,
  },
};
