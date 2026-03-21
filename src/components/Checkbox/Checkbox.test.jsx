import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox Component Tests", () => {
  it("should render the checkbox with the correct label", () => {
    const labelText = "Gizlilik Sözleşmesini Onayla";
    render(<Checkbox label={labelText} />);

    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it("should call the onChange handler when clicked", () => {
    const mockOnChange = vi.fn();
    const labelText = "Beni Hatırla";

    render(
      <Checkbox label={labelText} onChange={mockOnChange} checked={false} />
    );

    fireEvent.click(screen.getByText(labelText));

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("should be checked when the checked prop is true", () => {
    const labelText = "Varsayılan Onay";

    render(<Checkbox label={labelText} checked={true} onChange={() => {}} />);

    const hiddenInput = screen.getByRole("checkbox", { name: labelText });
    expect(hiddenInput).toBeChecked();
  });

  it("should not call onChange when disabled", () => {
    const mockOnChange = vi.fn();
    const labelText = "Pasif Seçenek";

    render(
      <Checkbox label={labelText} onChange={mockOnChange} disabled={true} />
    );

    const labelElement = screen.getByText(labelText);

    fireEvent.click(labelElement);

    const hiddenInput = screen.getByRole("checkbox", { name: labelText });
    expect(hiddenInput).toBeDisabled();

    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
