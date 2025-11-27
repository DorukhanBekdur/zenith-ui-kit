import React, { useState } from "react";
import { Modal } from "./Modal";

const meta = {
  title: "Zenith UI/Molecules/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls the visibility of the modal.",
    },
    onClose: {
      action: "onClose called",
      description: "Function to close the modal.",
    },
    title: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;

export const BasicModal = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    if (args.onClose) {
      args.onClose();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Open Modal
      </button>

      <Modal {...args} isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

BasicModal.args = {
  title: "Basic Modal Title",
  children: (
    <p>
      This is the main body content of the modal. Now we can proceed without
      relying on the custom Button component.
    </p>
  ),
};
