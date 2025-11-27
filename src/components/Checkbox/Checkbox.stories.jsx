import { Checkbox } from "./Checkbox";

const meta = {
  title: "Zenith UI/Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "checked" },
  },
};

export default meta;

// Checkbox Stories
export const Default = {
  args: {
    label: "I Accept the Terms and Conditions",
    checked: false,
  },
};

export const Checked = {
  args: {
    label: "Remember Me",
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: "This option is passive",
    disabled: true,
    checked: false,
  },
};
