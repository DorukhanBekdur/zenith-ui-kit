import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Drawer } from './Drawer';

describe('Drawer Component', () => {
  it('does not render when open is false', () => {
    render(<Drawer open={false} title="Settings">Hidden details</Drawer>);
    expect(screen.queryByText('Settings')).not.toBeInTheDocument();
  });

  it('renders content when open is true', () => {
    render(<Drawer open={true} title="Menu">Drawer content</Drawer>);
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Drawer content')).toBeInTheDocument();
  });

  it('calls onClose on close button click', () => {
    const handleClose = vi.fn();
    render(<Drawer open={true} title="Menu" onClose={handleClose}>Content</Drawer>);
    
    const closeBtn = screen.getByText('×');
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
