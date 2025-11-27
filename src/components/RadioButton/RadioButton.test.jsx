import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RadioButton } from "./RadioButton";

describe("RadioButton Component Tests", () => {
  const mockOnChange = vi.fn();
  const groupName = "options";

  it("should render the radio button with the correct label", () => {
    const labelText = "Seçenek A";
    render(<RadioButton label={labelText} name={groupName} value="A" />);

    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it("should call the onChange handler when clicked", () => {
    const labelText = "Seçenek B";

    render(
      <RadioButton
        label={labelText}
        onChange={mockOnChange}
        name={groupName}
        value="B"
        checked={false}
      />
    );

    fireEvent.click(screen.getByText(labelText));

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("should be checked when the checked prop is true", () => {
    const labelText = "Varsayılan Seçili";

    render(
      <RadioButton
        label={labelText}
        name={groupName}
        value="C"
        checked={true}
      />
    );

    const hiddenInput = screen.getByRole("radio", { name: labelText });
    expect(hiddenInput).toBeChecked();
  });

  it("should not call onChange when disabled", () => {
    const labelText = "Pasif Seçenek";

    render(
      <RadioButton
        label={labelText}
        onChange={mockOnChange}
        disabled={true}
        name={groupName}
        value="D"
      />
    );

    const labelElement = screen.getByText(labelText);

    fireEvent.click(labelElement);

    const hiddenInput = screen.getByRole("radio", { name: labelText });
    expect(hiddenInput).toBeDisabled();

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
