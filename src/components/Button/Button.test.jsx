import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component Tests", () => {
  it("should render the button with the correct label", () => {
    const labelText = "Save";
    render(<Button label={labelText} />);
    const buttonElement = screen.getByText(labelText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call the onClick handler when clicked", () => {
    const mockOnClick = vi.fn();
    const labelText = "Onayla";
    render(<Button label={labelText} onClick={mockOnClick} />);
    const buttonElement = screen.getByText(labelText);
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when the disabled prop is true", () => {
    const labelText = "Bekle";
    render(<Button label={labelText} disabled={true} />);
    const buttonElement = screen.getByText(labelText);
    expect(buttonElement).toBeDisabled();
  });
});
