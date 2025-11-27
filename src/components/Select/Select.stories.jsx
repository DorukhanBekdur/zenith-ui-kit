import React, { useState } from "react";
import { Select } from "./Select";

const sampleOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Watermelon", value: "watermelon" },
];

const meta = {
  title: "Zenith UI/Atoms/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    options: { control: "object" },
    value: { control: false },
    onChange: { action: "value changed" },
  },
};

export default meta;

export const Default = {
  render: () => {
    const [selection, setSelection] = useState(null);
    const handleChange = (e) => {
      setSelection(e.target.value);
    };

    return (
      <Select
        label="Preferred Fruit"
        options={sampleOptions}
        value={selection}
        onChange={handleChange}
        placeholder="Please choose a fruit"
        name="fruitSelection"
      />
    );
  },
  args: {},
};

export const PreSelected = {
  render: () => {
    const [selection, setSelection] = useState("banana");
    const handleChange = (e) => {
      setSelection(e.target.value);
    };

    return (
      <Select
        label="Starting Selection"
        options={sampleOptions}
        value={selection}
        onChange={handleChange}
        name="initialSelection"
      />
    );
  },
  args: {},
};
