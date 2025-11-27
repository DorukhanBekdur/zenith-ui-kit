import { Badge } from "./Badge";
import { SettingsIcon } from "../Icon/Icon";

const meta = {
  title: "Zenith UI/Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "error"],
      description: "Defines the color scheme of the badge.",
    },
    children: { control: "text" },
  },
};

export default meta;

export const DefaultStatus = {
  args: {
    children: "Pending",
    variant: "default",
  },
};

export const Success = {
  args: {
    children: "Active",
    variant: "success",
  },
};

export const Warning = {
  args: {
    children: "Review",
    variant: "warning",
  },
};

export const Error = {
  args: {
    children: "Failed",
    variant: "error",
  },
};

export const WithIcon = {
  render: (args) => (
    <Badge {...args} style={{ display: "inline-flex" }}>
      <SettingsIcon style={{ width: "0.5em", height: "0.5em" }} />
      Settings
    </Badge>
  ),
  args: {
    variant: "primary",
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="default">Default</Badge>
    </div>
  ),
};
