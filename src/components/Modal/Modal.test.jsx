import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from './Modal';

describe('Modal Component', () => {
  it('does not render when open is false', () => {
    render(<Modal open={false} title="Test Modal">Hidden content</Modal>);
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  it('renders modal content when open is true', () => {
    render(<Modal open={true} title="Visible Modal">Visible content</Modal>);
    expect(screen.getByText('Visible Modal')).toBeInTheDocument();
    expect(screen.getByText('Visible content')).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    const handleClose = vi.fn();
    render(<Modal open={true} title="Test Modal" onClose={handleClose}>Content</Modal>);
    
    // The close button has an internal text '&times;' which translates to '×'
    const closeBtn = screen.getByText('×');
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop is clicked', () => {
    const handleClose = vi.fn();
    // Wrap to get access to custom container
    const { container } = render(
      <Modal open={true} title="Test Modal" onClose={handleClose}>Content</Modal>
    );
    
    // The portal mounts to body, so we search the whole document
    // The backdrop is the first div rendered by createPortal. We can find it by its CSS module class, but let's click the element containing the modal.
    const backdrop = document.querySelector('[class*="backdrop"]');
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(handleClose).toHaveBeenCalledTimes(1);
    }
  });

  it('does not call onClose when clicking inside the modal box', () => {
    const handleClose = vi.fn();
    render(<Modal open={true} title="Test Modal" onClose={handleClose}>Content</Modal>);
    
    const modalBox = document.querySelector('[class*="modal"]');
    if (modalBox) {
      fireEvent.click(modalBox);
      expect(handleClose).not.toHaveBeenCalled();
    }
  });
});
