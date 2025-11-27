import { Icon, SettingsIcon } from "./Icon";

const meta = {
  title: "Zenith UI/Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Defines the size of the icon.",
    },
    color: {
      control: "select",
      options: ["default", "primary", "error"],
      description: "Defines the color of the icon.",
    },
    children: { control: false },
  },
};

export default meta;

export const DefaultSettingsIcon = {
  args: {
    children: <SettingsIcon />,
    size: "md",
    color: "default",
  },
};

export const PrimaryLarge = {
  args: {
    children: <SettingsIcon />,
    size: "lg",
    color: "primary",
  },
};

export const SmallError = {
  args: {
    children: <SettingsIcon />,
    size: "sm",
    color: "error",
  },
};

export const AllSizes = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Icon {...args} size="sm" color="default">
        <SettingsIcon />
      </Icon>
      <Icon {...args} size="md" color="primary">
        <SettingsIcon />
      </Icon>
      <Icon {...args} size="lg" color="error">
        <SettingsIcon />
      </Icon>
    </div>
  ),
  args: {},
};
