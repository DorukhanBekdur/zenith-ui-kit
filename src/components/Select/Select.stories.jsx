import React, { useState } from "react";
import { Select } from "./Select";

const sampleOptions = [
  { label: "Elma", value: "apple" },
  { label: "Muz", value: "banana" },
  { label: "Portakal", value: "orange" },
  { label: "Çilek", value: "strawberry" },
  { label: "Karpuz", value: "watermelon" },
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
        label="Tercih Edilen Meyve"
        options={sampleOptions}
        value={selection}
        onChange={handleChange}
        placeholder="Lütfen bir meyve seçin"
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
        label="Başlangıç Seçimi"
        options={sampleOptions}
        value={selection}
        onChange={handleChange}
        name="initialSelection"
      />
    );
  },
  args: {},
};
