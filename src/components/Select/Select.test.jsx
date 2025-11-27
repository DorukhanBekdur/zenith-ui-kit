import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./Select";

vi.mock("./Select.module.scss", () => ({ default: {} }));

const sampleOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

describe("Select Component Tests", () => {
  const mockOnChange = vi.fn();
  const labelText = "Fruit Selection";
  const placeholderText = "Please select a fruit";

  it("should render the select button and its label", () => {
    render(
      <Select
        label={labelText}
        options={sampleOptions}
        placeholder={placeholderText}
      />
    );

    expect(screen.getByText(labelText)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: new RegExp(placeholderText, "i") })
    ).toBeInTheDocument();
  });

  it("should toggle the options list when the button is clicked", () => {
    render(
      <Select
        label={labelText}
        options={sampleOptions}
        placeholder={placeholderText}
      />
    );

    const selectButton = screen.getByRole("button", {
      name: new RegExp(placeholderText, "i"),
    });

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    fireEvent.click(selectButton);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    fireEvent.click(selectButton);
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("should call onChange with the correct value when an option is clicked", () => {
    render(
      <Select
        label={labelText}
        options={sampleOptions}
        onChange={mockOnChange}
        value={null}
        placeholder={placeholderText}
      />
    );

    const selectButton = screen.getByRole("button", {
      name: new RegExp(placeholderText, "i"),
    });

    fireEvent.click(selectButton);

    fireEvent.click(screen.getByRole("option", { name: "Banana" }));

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "banana" }),
      })
    );

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("should display the label of the initial value", () => {
    render(<Select label={labelText} options={sampleOptions} value="orange" />);

    expect(screen.getByText("Orange")).toBeInTheDocument();

    const selectButton = screen.getByRole("button", { name: /Orange/i });
    expect(selectButton).toBeInTheDocument();
  });
});
