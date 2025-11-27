import React, { useState } from "react";
import { RadioButton } from "./RadioButton";

const meta = {
  title: "Zenith UI/Atoms/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    name: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;

export const RadioGroup = {
  render: () => {
    const [selected, setSelected] = useState("option1");
    const handleChange = (event) => {
      setSelected(event.target.value);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p style={{ fontFamily: "Inter, sans-serif" }}>Preferred Language:</p>
        <RadioButton
          label="Turkish"
          name="language"
          value="option1"
          checked={selected === "option1"}
          onChange={handleChange}
        />
        <RadioButton
          label="English"
          name="language"
          value="option2"
          checked={selected === "option2"}
          onChange={handleChange}
        />
        <RadioButton
          label="Germany (Disable)"
          name="language"
          value="option3"
          checked={selected === "option3"}
          onChange={handleChange}
          disabled={true}
        />
      </div>
    );
  },
  args: {},
};
