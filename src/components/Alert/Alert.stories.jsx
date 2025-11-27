import { Alert } from "./Alert";

const meta = {
  title: "Zenith UI/Atoms/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      description: "Determines the notification type (Color and purpose).",
    },
    children: { control: "text" },
  },
};

export default meta;

export const Info = {
  args: {
    type: "info",
    children: "This is a general information message to the user.",
  },
};

export const Success = {
  args: {
    type: "success",
    children: "Your transaction has been completed successfully!",
  },
};

export const Warning = {
  args: {
    type: "warning",
    children: "Warning: You have unsaved changes.",
  },
};

export const Error = {
  args: {
    type: "error",
    children: "An error occurred. Please check the form.",
  },
};
