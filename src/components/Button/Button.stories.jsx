import { Button } from "./Button";

const meta = {
  title: "Zenith UI/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    primary: {
      control: "boolean",
      description: "Determines the base style (Blue)",
    },
    label: { control: "text", description: "Buttons Text" },
    disabled: { control: "boolean", description: "Disables the button" },
    onClick: {
      action: "clicked",
      description: "Buton tıklandığında tetiklenir",
    },
  },
};

export default meta;

// Button Stories

export const Primary = {
  args: {
    primary: true,
    label: "Start",
  },
};

export const Secondary = {
  args: {
    primary: false,
    label: "Cancel",
  },
};

export const Disabled = {
  args: {
    primary: true,
    disabled: true,
    label: "Disabled",
  },
};
