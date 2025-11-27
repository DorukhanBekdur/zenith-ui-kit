import { Input } from "./Input";

const meta = {
  title: "Zenith UI/Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text", description: "Shows error message" },
    type: { control: "select", options: ["text", "password", "email"] },
    onChange: { action: "changed" },
  },
};

export default meta;

// Input Stories
export const Default = {
  args: {
    label: "Username",
    placeholder: "Enter your name here",
  },
};

export const WithError = {
  args: {
    label: "Email Address",
    placeholder: "Please enter a valid email address.",
    error: "This field is required and must contain a valid email address.",
  },
};

export const PasswordInput = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "••••••••",
  },
};
