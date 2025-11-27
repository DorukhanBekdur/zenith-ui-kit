import { Textarea } from "./Textarea";

const meta = {
  title: "Zenith UI/Atoms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text", description: "Shows error message" },
    onChange: { action: "changed" },
    rows: { control: "number", description: "number of rows" },
    cols: { control: "number", description: "Number of columns" },
  },
};

export default meta;

// Textarea Stories
export const Default = {
  args: {
    label: "Your Feedback",
    placeholder: "Write your detailed comments here...",
    rows: 4,
  },
};

export const WithError = {
  args: {
    label: "Mandatory Disclosure",
    placeholder: "Why didn't you join?",
    error: "This description field is required.",
    rows: 6,
  },
};
